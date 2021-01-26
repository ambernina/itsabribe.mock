const router = require('express').Router();
const { MongoDBService } = require('../services');
const mongo = new MongoDBService();
const collection = 'organizations';
var RedisClient = require('redis');
require('dotenv').config();
const expire_time = 60*60*12;

if(process.env.Environment == "production")
{
    var redisClient = RedisClient.createClient(process.env.redisClusterPort, process.env.redisClusterHost);
    // redisClient.flushdb(function(err, suc) { //clear all keys
    // console.log(suc);
    // })
    redisClient.on('connect', (err, suc) => {
        console.log('Redis connected');
    });
}
router.route('/').get((req, res) => {
    if(process.env.Environment == "production")
    {
        redisClient.exists("organizations", function(err, val){
            if(val) // if key exists
                redisClient.get("organizations", function(err, val){
                    res.json(JSON.parse(val));
                });
            else {
                mongo.find(collection).then(organizations => {
                    redisClient.set("organizations", JSON.stringify(organizations), 'EX', expire_time, function(err, val1) {
                        redisClient.get("organizations", function(err, value){
                            res.json(JSON.parse(value));
                        });
                    });
                });
            }
        });
    }
    else{
        mongo.find(collection).then(organizations => {
            res.json(organizations);
        });
    }
    
});

router.route('/:id').get((req, res) => {
    if(process.env.Environment == "production")
    {
        redisClient.exists("organizations-" + req.params.id, function(err, val){
            if(val) // if key exists
                redisClient.get("organizations-" + req.params.id, function(err, val){
                    res.json(JSON.parse(val));
                });
            else {
                mongo.findOne(collection, {"orgname" : req.params.id}).then(organizations => {
                    redisClient.set("organizations-" + req.params.id, JSON.stringify(organizations), 'EX', expire_time, function(err, val1) {
                        redisClient.get("organizations-" + req.params.id, function(err, value){
                            res.json(JSON.parse(value));
                        });
                    // res.json(redisClient.get("legislators-" + req.params.id));
                    });
                });
            }
        });
    }
    else {
        mongo.findOne(collection, {"orgname" : req.params.id}).then(organizations => {
            res.json(organizations);
        });
    }
    
});

// router.route('/').get((req, res) => {
//     mongo.find(collection).then(companies => {
//         res.json(companies);
//     });
// });



module.exports = router;
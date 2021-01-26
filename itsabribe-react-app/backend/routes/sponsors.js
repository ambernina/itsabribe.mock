const router = require('express').Router();
const { MongoDBService } = require('../services');
const mongo = new MongoDBService();
const collection = 'contributors';
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
        redisClient.exists("sponsors", function(err, val){
            if(val) // if key exists
                redisClient.get("sponsors", function(err, val){
                    res.json(JSON.parse(val));
                });
            else {
                mongo.find(collection).then(sponsors => {
                    redisClient.set("sponsors", JSON.stringify(sponsors), 'EX', expire_time, function(err, val1) {
                        redisClient.get("sponsors", function(err, value){
                            res.json(JSON.parse(value));
                        });
                    });
                });
            }
        });
    }
    else{
        mongo.find(collection).then(sponsors => {
            res.json(sponsors);
        });
    }
    
});

router.route('/:orgname').get((req, res) => {
    if(process.env.Environment == "production")
    {
        redisClient.exists("sponsors-" + req.params.orgname, function(err, val){
            if(val) // if key exists
                redisClient.get("sponsors-" + req.params.orgname, function(err, val){
                    res.json(JSON.parse(val));
                });
            else {
                mongo.find(collection).then(sponsors => {
                    var spon = [];
                    for(let i=0; i<sponsors.length; i++){
                        var temp;
                        for(let j=0; j<sponsors[i].contributor.length; j++){
                            if(req.params.orgname == sponsors[i].contributor[j]['@attributes'].org_name){
                                temp = {
                                    "leg_info": sponsors[i]['@attributes'],
                                    "contributor": sponsors[i].contributor[j]['@attributes']
                                };
                                spon.push(temp);
                            }
                        }
                    }
                    redisClient.set("sponsors-" + req.params.orgname, JSON.stringify(spon), 'EX', expire_time, function(err, val1) {
                        redisClient.get("sponsors-" + req.params.orgname, function(err, value){
                            res.json(JSON.parse(value));
                        });
                    // res.json(redisClient.get("legislators-" + req.params.orgname));
                    });
                });
            }
        });
    }
    else {
        mongo.find(collection).then(sponsors => {
            var spon = [];
            for(let i=0; i<sponsors.length; i++){
                var temp;
                for(let j=0; j<sponsors[i].contributor.length; j++){
                    if(req.params.orgname == sponsors[i].contributor[j]['@attributes'].org_name){
                        temp = {
                            "leg_info": sponsors[i]['@attributes'],
                            "contributor": sponsors[i].contributor[j]['@attributes']
                        };
                        spon.push(temp);
                    }
                }
            }
            res.json(spon);
        });
    }
    
});

// router.route('/').get((req, res) => {
//     mongo.find(collection).then(companies => {
//         res.json(companies);
//     });
// });



module.exports = router;
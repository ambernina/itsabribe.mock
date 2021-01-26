const router = require('express').Router();
const { MongoDBService } = require('../services');
const mongo = new MongoDBService();
ObjectId = require('mongodb').ObjectID;
const collection = 'industries';
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
        redisClient.exists("industries", function(err, val){
            if(val) // if key exists
                redisClient.get("industries", function(err, val){
                    res.json(JSON.parse(val));
                });
            else {
                mongo.find(collection).then(industries => {
                    redisClient.set("industries", JSON.stringify(industries), 'EX', expire_time, function(err, val1) {
                        redisClient.get("industries", function(err, value){
                            res.json(JSON.parse(value));
                        });
                    });
                });
            }
        });
    }
    else{
        mongo.find(collection).then(industries => {
            res.json(industries);
        });
    }
    
});

router.route('/:id').get((req, res) => {
    if(process.env.Environment == "production")
    {
        redisClient.exists("industries-" + req.params.id, function(err, val){
            if(val) // if key exists
                redisClient.get("industries-" + req.params.id, function(err, val){
                    res.json(JSON.parse(val));
                });
            else {
                mongo.findOne(collection, {"@attributes.cid" : req.params.id}).then(industries => {
                    redisClient.set("industries-" + req.params.id, JSON.stringify(industries), 'EX', expire_time, function(err, val1) {
                        redisClient.get("industries-" + req.params.id, function(err, value){
                            res.json(JSON.parse(value));
                        });
                    // res.json(redisClient.get("legislators-" + req.params.id));
                    });
                });
            }
        });
    }
    else {
        mongo.findOne(collection, {"@attributes.cid" : req.params.id}).then(industries => {
            res.json(industries);
        });
    }
    
});


module.exports = router;
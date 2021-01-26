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
        redisClient.exists("contributors", function(err, val){
            if(val) // if key exists
                redisClient.get("contributors", function(err, val){
                    res.json(JSON.parse(val));
                });
            else {
                mongo.find(collection).then(contributors => {
                    redisClient.set("contributors", JSON.stringify(contributors), 'EX', expire_time, function(err, val1) {
                        redisClient.get("contributors", function(err, value){
                            res.json(JSON.parse(value));
                        });
                    });
                });
            }
        });
    }
    else{
        mongo.find(collection).then(contributors => {
            res.json(contributors);
        });
    }
    
});

router.route('/:id').get((req, res) => {
    if(process.env.Environment == "production")
    {
        redisClient.exists("contributors-" + req.params.id, function(err, val){
            if(val) // if key exists
                redisClient.get("contributors-" + req.params.id, function(err, val){
                    res.json(JSON.parse(val));
                });
            else {
                mongo.findOne(collection, {"@attributes.cid" : req.params.id}).then(contributors => {
                    redisClient.set("contributors-" + req.params.id, JSON.stringify(contributors), 'EX', expire_time, function(err, val1) {
                        redisClient.get("contributors-" + req.params.id, function(err, value){
                            res.json(JSON.parse(value));
                        });
                    // res.json(redisClient.get("legislators-" + req.params.id));
                    });
                });
            }
        });
    }
    else {
        mongo.findOne(collection, {"@attributes.cid" : req.params.id}).then(contributors => {
            res.json(contributors);
        });
    }
    
});

module.exports = router;
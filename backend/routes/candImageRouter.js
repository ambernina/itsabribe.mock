const router = require('express').Router();
const { MongoDBService } = require('../services');
const mongo = new MongoDBService();
ObjectId = require('mongodb').ObjectID;
const collection = 'candimages';
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
        redisClient.exists("legislators", function(err, val){
            if(val) // if key exists
                redisClient.get("legislators", function(err, val){
                    res.json(JSON.parse(val));
                });
            else {
                mongo.find(collection).then(legislators => {
                    redisClient.set("legislators", JSON.stringify(legislators), 'EX', expire_time, function(err, val1) {
                        redisClient.get("legislators", function(err, value){
                            res.json(JSON.parse(value));
                        });
                    });
                });
            }
        });
    }
    else{
        mongo.find(collection).then(orgimages => {
            res.json(orgimages);
        });
    }
});

router.route('/:id').get((req, res) => {
    if(process.env.Environment == "production")
    {
        redisClient.exists("candImage-" + req.params.id, function(err, val){
            if(val) // if key exists
                redisClient.get("candImage-" + req.params.id, function(err, val){
                    res.json(JSON.parse(val));
                });
            else {
                mongo.findOne(collection, {"cid" : req.params.id}).then(candImage => {
                    redisClient.set("candImage-" + req.params.id, JSON.stringify(candImage), 'EX', expire_time, function(err, val1) {
                        redisClient.get("candImage-" + req.params.id, function(err, value){
                            res.json(JSON.parse(value));
                        });
                    // res.json(redisClient.get("legislators-" + req.params.id));
                    });
                });
            }
        });
    }
    else {
        mongo.findOne(collection, {"cid" : req.params.id}).then(candImage => {
            res.json(candImage);
        });
    }
});

module.exports = router;

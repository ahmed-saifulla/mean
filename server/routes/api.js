const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Error = require('../models/error');


//for mongoose DB  
const db = "mongodb://ahsaifulla:qwerty123@ds221155.mlab.com:21155/errorreport";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Error : " + err);
    }
});


router.get('/', function(req , res){
    res.send('api works');
});

router.get('/errors', function(req , res){
    console.log('Getreq for all errors');
    Error.find({}).exec(function(err, errors){
        if(err){
            console.log('Erroer  receiving errors');
        }
        else{
            res.json(errors);
        }
    })
});

router.get('/errors/:id', function(req , res){
    console.log('Getreq for eroor id: ' + req.params.id);
    Error.findById(req.params.id).exec(function(err, errors){
        if(err){
            console.log('Erroer  receiving errors');
        }
        else{
            res.json(errors);
        }
    })
});

module.exports =router;
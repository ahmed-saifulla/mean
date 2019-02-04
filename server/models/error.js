const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const errorSchema = new Schema({
    error: String,
    problem: String,
    description: String
});

module.exports = mongoose.model('error' , errorSchema , 'errors');

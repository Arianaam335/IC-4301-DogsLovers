//Require database dependencies
const mongoose = require('mongoose');
const mongoDB = require('mongodb');
const URI = 'mongodb+srv://nottwithtt:Nicolita1998+@cluster0.gi2w4fi.mongodb.net/DogsLoversDB?retryWrites=true&w=majority';
const conn = mongoose.createConnection(URI, {useNewUrlParser: true});

//Require different manipulation methods to interact with the database.

const fosterHomesQueries = require('./FosterHomeQueries');
const blackListQueries = require('./BlackListQueries');



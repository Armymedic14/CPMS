//mongoose is a schema tool for MongoDB
const mongoose = require('mongoose');

//as seen in given database schema
const authorSchema = new mongoose.Schema({
    FirstName: {type: String, trim: true, required: false}, 
    MiddleInitial: {type: String, trim: true, maxlength: 1, required: false},
    LastName: {type: String, trim: true, required: false},
    Affiliation: {type: String, trim: true, required: false},
    Department: {type: String, trim: true, required: false},
    Address: {type: String, trim: true, required: false},
    City: {type: String, trim: true, required: false},
    State: {type: String, trim: true, maxlength: 2, required: false},
    ZipCode: {type: String, trim: true, maxlength: 5,required: false},
    PhoneNumber: {type: String, trim: true, required: false},
    EmailAddress: {type: String, trim: true, required: true},
    Password: {type: String, maxlength: 5, required: true}, 
});

const Author = mongoose.model('author', authorSchema);
module.exports = Author;
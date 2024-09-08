const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    rollNo:Number,
    grade:String
});

module.exports = mongoose.model('student',schema);

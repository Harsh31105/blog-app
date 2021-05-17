const mongoose = require('mongoose')

//DataBase Schema is a structure in which data is oging to be stored in DataBase.
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

//"Article" is a model which is going to use this Schema.
module.exports = mongoose.model('Article', articleSchema)
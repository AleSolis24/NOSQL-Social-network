const mongoose = require('mongoose'); 

const userThoughts = new mongoose.Schema({
    thoughtMessage: {
        type: String,
        required: true
    }
})
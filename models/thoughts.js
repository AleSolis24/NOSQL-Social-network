const mongoose = require('mongoose'); 

const userThoughts = new mongoose.Schema({
    thoughtMessage: {
        type: String,
        required: true,
        minlength: 10,
        maxlenght: 100
    },

    createdAt: {
        type: Data,
        default: Data.now,
    },

    username: {
        type: String,
        required: true
    },

    reactions: [
        {
            reactionBody: {
                type: String,
                required: true,
                maxlength: 100
            },
            username: {
                type: String,
                required: true
            },

        },
    ],
});

const Thoughts = mongoose.model('Thoughts', userThoughts);

module.exports = Thoughts;
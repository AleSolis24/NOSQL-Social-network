const mongoose = require('mongoose');


const userAccount = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thoughts',
        },
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
        },
    ],
});

const Users = mongoose.model('Users', userAccount);

module.exports = Users; 
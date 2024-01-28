const { Users } = require('../models');

const userAccount = {

    getAllAccounts: async (req, res) => {
        try {
            const allAccounts = await Users.findAll();
            res.json(allAccounts);
            res.status(200)
        } catch (err) {
            res.status(500).json({ err: "Can't find accounts!!"});
        }
    },

    getAccountById: async (req, res) => {
        try {
            const certainAccounts = await Users.findOne();
            res.json(certainAccounts);
            res.status(200);
        } catch (err) {
            res.status(500).json({ err: "Can't find that account!" })
        }
    },

    newAccount: async (req, res) => {
        try {
            const newUser = await Users.create(req.body);
            res.json(newUser);
            res.staus(200);
        } catch (err) {
            res.status(500).json({ err: "Can't make new account!" });
        }
    },

    deleteAccount: async (req, res) => {
        try {
            const deleteUser = await Users.destroy(req.params.userId);
            res.json(deleteUser);
            res.status(200);
        } catch (err) {
            res.status(500).json({ err: "Can not delete account!!" });
        }
    },

    updateAccount: async (req, res) => {
        try {
            const updateUser = await Users.findByIdAndUpdate(req.params.userId, req.body, {new: true});
            res.json(updateUser);
            res.status(200);
        } catch (err) {
            res.status(500).json({ err: "Can't update account!!" });
        }
    },

    newFriend: async (req, res) => {
        try {
            const newUser = await User.findOne(req.params.userId, {$addToSet: {friends: req.params.friendId}}, {new: true});
            res.json(newUser);
        } catch (err) {
            res.status(500).json({ err: "Fake friend need to check your new friend" });
        }
    },

    deleteFriend: async (req, res) => {
        try {
            const fakeFriend = await User.findByIdAndUpdate(req.params.userId, {$pull: { friends: req.params.friendId}}, { new: true });
            res.json(fakeFriend);
        } catch (err) {
            res.status(500).json({ err: "Got rid of your fake friend" });
        }   
    }
};

module.exports = userAccount;
const {User} = require('../models');

const userAccount = {
  getAllAccounts: async (req, res) => {
    try {
      const allAccounts = await User.find();
      res.status(200).json(allAccounts);
    } catch (err) {
      res.status(500).json({ error: "Can't find accounts!!" });
    }
  },

  getAccountById: async (req, res) => {
    try {
      const certainAccounts = await User.findById(req.params.userId);
      res.status(200).json(certainAccounts);
    } catch (err) {
      res.status(500).json({ error: "Can't find that account!" });
    }
  },

  newAccount: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (err) {
      res.status(500).json({ error: "Can't make new account!" });
    }
  },

  deleteAccount: async (req, res) => {
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.userId);
      res.status(200).json(deleteUser);
    } catch (err) {
      res.status(500).json({ error: "Can not delete account!!" });
    }
  },

  updateAccount: async (req, res) => {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(500).json({ error: "Can't update account!!" });
    }
  },

  newFriend: async (req, res) => {
    try {
      const newUser = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      res.status(200).json(newUser);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Fake friend need to check your new friend" });
    }
  },

  deleteFriend: async (req, res) => {
    try {
      const fakeFriend = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      res.status(200).json(fakeFriend);
    } catch (err) {
      res.status(500).json({ error: "Got rid of your fake friend" });
    }
  },
};

module.exports = userAccount;

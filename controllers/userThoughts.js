const {Thoughts, User} = require('../models')
const userThoughts = {

    getAllThoughts: async (req, res) => {
        try {
            const allThoughts = await Thoughts.find();
            res.json(allThoughts);
            res.status(200);
        } catch (err) {
            res.status(500).json({ err: "Can't find user thoughts!" });
        }
    },

    getThoughtsById: async (req, res) => {
        try {
            const certainThoughts = await Thoughts.findOne();
            res.json(certainThoughts);
            res.status(200).send();
        } catch (err) {
            res.status(500).json({ err: "Can't find that CERTAIN thought" });
        }
    },

    newThoughts: async (req, res) => {
        try {
            const newAccountThoughts = await Thoughts.create(req.body);
            await User.findByIdAndUpdate(req.body.userId, { $addToSet: { thoughts: newAccountThoughts._id } });
            res.status(200).json(newAccountThoughts);
        } catch (err) {
            res.status(500).json({ err: "Can't create new Thoughts!!" });
        }
    },
    
    updateThoughts: async (req, res) => {
        try {
            const updateThoughts = await Thoughts.findByIdAndUpdate(req.params.thoughtsId, {$set: req.body}, {new: true})
            res.status(200).json(updateThoughts)
        } catch (err) {
            res.status(500).json({err: "There is a error on updating your thoughts!"});
        }
    },

    deleteThoughts: async (req, res) => {
        try {
            const destroyThoughts = await Thoughts.findByIdAndDelete(req.params.thoughtsId);
            await User.findByIdAndUpdate(
                req.params.userId,
                { $pull: { thoughts: req.params.thoughtsId } },
                { new: true }
            );
            res.status(200).json(destroyThoughts);
        } catch (err) {
            res.stauts(500).json("Can't delete User Thoughts");
        }
    },

    newReaction: async (req, res) => {
        try {
            const reaction = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtsId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            res.status(200).json(reaction);
        } catch (err) {
            res.stauts(500).json("Can't add reaction");
        }
    },

    deleteReaction: async (req, res) => {
        try {
            const removeReactions= await Thoughts.findOneAndUpdate(
                {_id: req.params.thoughtsId},
                {$pull: {reactions: {reactionId: req.body.reactionId}}},
                {runValidatore: true, new: true}
            );
            res.status(200).json(removeReactions)
        } catch (err) {
            res.status(500).json("Can't delete reaction");
        }
    }
};

module.exports = userThoughts; 
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    newThoughts,
    deleteThoughts,
    newReaction,
    deleteReaction,
    updateThoughts
} = require('../../controllers/userThoughts');

router.route('/thoughts')
    .get(getAllThoughts)
    .post(newThoughts);

router.route('/thoughts/:thoughtsId')
    .get(getThoughtsById)
    .delete(deleteThoughts)
    .put(updateThoughts);

router.route('/thoughts/:thoughtsId/reactions')
    .post(newReaction);

router.route('/thoughts/:thoughtsId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;

const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    newThoughts,
    deleteThoughts,
    newReaction,
    deleteReaction
} = require('../../controllers/userThoughts');

router.route('/thoughts')
    .get(getAllThoughts)
    .post(newThoughts);

router.route('/thoughts/:thoughtsId') 
    .get(getThoughtsById)
    .delete(deleteThoughts);

router.route('/thoughts/:thoughtsId/reactions')
    .post(newReaction);

router.route('/thoughts/:thoughtsId/reactions/:reactionsId') 
    .delete(deleteReaction);

module.exports = router;

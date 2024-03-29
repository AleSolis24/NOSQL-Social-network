const router = require('express').Router();
const {
    getAllAccounts,
    getAccountById,
    newAccount,
    deleteAccount,
    updateAccount,
    newFriend,
    deleteFriend
} = require('../../controllers/userAccount');

// Route to get all accounts and also to get a new account for the API
router.route('/users')
    .get(getAllAccounts)
    .post(newAccount);

// Route to find a certain user ID and to update user account and delete their account
router.route('/users/:userId')  
    .get(getAccountById)
    .put(updateAccount)
    .delete(deleteAccount);

// Route to get a new friend or delete a fake friend 
router.route('/users/:userId/friends/:friendId')  
    .post(newFriend)
    .delete(deleteFriend);

module.exports = router;

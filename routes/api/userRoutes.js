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

// Route to get all accounts and also to get new acocunt for the api
router.route('/users')
.get(getAllAccounts)
.get(newAccount);

// Route to find a certain user ID and to update user account and delete there acount
router.route('./users/:userId')
.get(getAccountById)
.get(updateAccount)
.get(deleteAccount)

// Route to get a new friend or delete a fake friend 
router.route('./users/:userId/friends/:friendsId')
.get(newFriend)
.get(deleteFriend)



module.exports = router;
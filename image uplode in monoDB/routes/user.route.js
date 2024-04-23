const express = require('express');
const router = express.Router();
const usermodel = require('../models/user.model');
const { updateUserByID, getUserByID, getAllUsers, loginUser, registerUser } = require('../controllers/user.controller');


router.post('/', registerUser)
router.post('/login',loginUser)
router.get('/', getAllUsers)
router.get('/:id', getUserByID)
router.put('/:id', updateUserByID)



module.exports = router;


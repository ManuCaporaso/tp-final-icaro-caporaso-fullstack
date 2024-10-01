const express = require('express');
const router = express.Router();
const { signUp, login , getUserDetails} = require('../controllers/users.controller');
const { isAuth, isLoggedIn } = require('../middlewares');

router.post('/signup', signUp);
router.post('/login', login);
router.get('/:id', isLoggedIn, isAuth, getUserDetails);

module.exports = router;

const express = require('express');
const { isLoggedIn } = require('../middlewares');
const router = express.Router();
const {
    createPurchase,
    getPurchaseHistory
} = require('../controllers/purchasehistory.controller'); 

router.post('/', isLoggedIn, createPurchase); 
router.get('/', isLoggedIn, getPurchaseHistory); 

module.exports = router;

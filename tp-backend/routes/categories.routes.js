const express = require('express');
const router = express.Router();
const { getAllCategories } = require('../controllers');

router.get('/', getAllCategories); 

module.exports = router; 

const express = require('express');
const router = express.Router();
const { getAllHighlights } = require('../controllers');

router.get('/', getAllHighlights); 

module.exports = router; 

const express = require('express');
const router = express.Router();

router.use('/items', require('./items.routes'));
router.use('/categories', require('./categories.routes'));
router.use('/highlights', require('./highlights.routes'));
router.use('/users', require('./users.routes'));
router.use('/purchases', require('./purchaseHistory.routes'));

module.exports = router;

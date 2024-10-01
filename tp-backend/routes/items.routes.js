const express = require('express');
const {isAdmin} = require('../middlewares');
const router = express.Router();
const {
    getAllItems,
    createItem,
    getItemById,
    updateItem,
    deleteItem
} = require('../controllers');

router.get('/', getAllItems);
router.post("/", isAdmin,createItem);
router.get('/:id', getItemById);
router.put('/:id', isAdmin, updateItem);
router.delete('/:id', isAdmin, deleteItem);

module.exports = router;

const { getAllCategories } = require("./categories.controller");
const { 
    createItem, 
    getAllItems, 
    getItemById,   
    updateItem,     
    deleteItem      
} = require('./items.controller');
const { getAllHighlights } = require("./highlights.controller");
const {signUp,login} = require("./users.controller");
const {createPurchase,getPurchaseHistory} = require("./purchasehistory.controller")

module.exports = {
    getAllItems,
    createItem,
    getItemById,    
    updateItem,     
    deleteItem,     
    getAllCategories,
    getAllHighlights,
    signUp,
    login,
    createPurchase,
    getPurchaseHistory
};

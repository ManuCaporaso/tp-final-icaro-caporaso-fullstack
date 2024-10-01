const { isAdmin } = require("./isAdmin.middleware");
const { isLoggedIn } = require("./isLoggedIn.middleware");
const { isAuth } = require("./isAuth.middleware");

module.exports = {
    isAdmin,
    isLoggedIn,
    isAuth
};

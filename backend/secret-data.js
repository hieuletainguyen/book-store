const bcrypt = require("bcrypt");

const jwtsecretkey = "qwerty123456789";
const saltRounds = 10;
const salt = bcrypt.genSalt(saltRounds);

module.exports = {
    jwtsecretkey, 
    salt,
}
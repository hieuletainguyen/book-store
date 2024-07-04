const bcrypt = require("bcrypt");

const jwtsecretkey = "qwerty123456789";
const saltRounds = 5;
const generate_salt = async () => {
    const new_salt = bcrypt.genSalt(saltRounds);
    return new_salt;
}

module.exports = {
    jwtsecretkey, 
    generate_salt,
}
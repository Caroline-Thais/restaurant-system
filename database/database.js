const Sequelize = require("sequelize");
const connection = new Sequelize('restaurantproject', 'root', 'Passei1t', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = connection;
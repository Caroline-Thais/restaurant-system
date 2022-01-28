const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Plate = connection.define('plates',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Plate.belongsTo(Category);
Category.hasMany(Plate);



module.exports = Plate;
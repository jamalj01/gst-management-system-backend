const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gst_management', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
});

module.exports = sequelize;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gst_management', 'root', 'admin123', {
    host: '3.106.56.231',
    dialect: 'mysql',
    logging: console.log,
});

module.exports = sequelize;

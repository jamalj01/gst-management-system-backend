const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Category = require('./category')(sequelize, Sequelize.DataTypes);
const Product = require('./product')(sequelize, Sequelize.DataTypes);
const Sale = require('./sale')(sequelize, Sequelize.DataTypes);

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

Product.hasMany(Sale, { foreignKey: 'product_id' });
Sale.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = {
    sequelize,
    Category,
    Product,
    Sale,
};

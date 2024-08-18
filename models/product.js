module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Categories',
                key: 'id'
            }
        }
    }, {
        timestamps: false
    });

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category',
        });
    };

    return Product;
};

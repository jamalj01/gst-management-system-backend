module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gst_rate: {
            type: DataTypes.DECIMAL(5, 2),
            allowNull: false,
        }
    }, {
        timestamps: false
    });

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            foreignKey: 'category_id',
            as: 'products',
        });
    };

    return Category;
};

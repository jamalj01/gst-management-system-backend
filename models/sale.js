module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sale_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Products',
                key: 'id'
            }
        }
    }, {
        timestamps: false, 
    });
    return Sale;
};

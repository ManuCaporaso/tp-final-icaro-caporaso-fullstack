const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./category.model'); 

const Item = sequelize.define('Item', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: true,
            min: 0,
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id',
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    highlighted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'item'
});

Item.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Item, { foreignKey: 'categoryId' });

module.exports = Item;

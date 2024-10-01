const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./category.model'); 

const Highlight = sequelize.define('highlight', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id',
        }
    },
}, {
    timestamps: true,
    tableName: 'highlight' 
});

Highlight.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Highlight, { foreignKey: 'categoryId' });

module.exports = Highlight;

//deprecated code TODO: Borrar
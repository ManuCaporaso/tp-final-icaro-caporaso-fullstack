const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // Datos de login
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    // Datos de contacto
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true, 
        validate: {
            isNumeric: {
                msg: 'El teléfono solo debe contener números.',
            },
        },
    },

    // Datos de domicilio
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    province: {
        type: DataTypes.STRING, 
        allowNull: true,
    },
    postalCode: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isNumeric: {
                msg: 'El código postal solo debe contener números.',
            },
        },
    },
    
    // Rol de usuario
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
        validate: {
            isIn: [['user', 'admin']],
        },
    },
}, {
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        },
        beforeUpdate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        },
    },
    defaultScope: {
        attributes: { exclude: ['password'] },
    },
    scopes: {
        withPassword: { attributes: {}, },
    },
    tableName: 'user',
});

User.prototype.isPasswordCorrect = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = User;

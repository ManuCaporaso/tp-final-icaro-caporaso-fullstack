const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, address, city, province, postalCode } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password,  
            phone,
            address,
            city,
            province,
            postalCode
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        const user = await User.scope('withPassword').findOne({ where: { email } });
  
        if (!user || !(await bcrypt.compare(password, user.password))) { 
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};

exports.getUserDetails = async (req, res) => {
    try {
        const userId = req.params.id; 
        const user = await User.findByPk(userId); 

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            address: user.address,
            city: user.city,
            province: user.province,
            postalCode: user.postalCode,
            fullAddress: `${user.address}, ${user.city}, ${user.province}, ${user.postalCode}`
        };

        res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los detalles del usuario' });
    }
};
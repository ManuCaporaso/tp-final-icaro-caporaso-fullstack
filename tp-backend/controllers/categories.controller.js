const { Category } = require('../models');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();

        res.status(200).json(categories);
    } catch (error) {
        console.error('Error al buscar las categorias:', error);
        res.status(500).json({ error: 'Error al buscar las categorias' });
    }
};

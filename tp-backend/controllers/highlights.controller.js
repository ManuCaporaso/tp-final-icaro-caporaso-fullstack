const Highlight = require('../models/highlight.model');
const Category = require('../models/category.model');

exports.getAllHighlights = async (req, res) => {
    try {
        const highlights = await Highlight.findAll({
            include: { model: Category, as: 'category' }
        });
        res.status(200).json(highlights);
    } catch (error) {
        console.error('Error fetching highlights:', error);
        res.status(500).json({ message: 'Error fetching highlights' });
    }
};

//Deprecated Code - TODO: Borrar


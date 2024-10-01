const path = require('path');
const multer = require('multer');
const { Item, Category } = require('../models');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'src/assets/images'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    },
});
const upload = multer({ storage });

exports.createItem = [
    upload.single('image'),
    async (req, res) => {
        try {
            const { title, price, categoryId, description, highlighted } = req.body; 
            const image = req.file ? `${req.file.filename}` : null;

            const newItem = await Item.create({
                title,
                price,
                description,
                categoryId,
                image,
                highlighted: highlighted || false 
            });

            res.status(200).json(newItem);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
];

exports.updateItem = [
    upload.single('image'),
    async (req, res) => {
        try {
            const { id } = req.params;
            const { title, price, description, categoryId, highlighted } = req.body; 
            const item = await Item.findOne({ where: { id } });

            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }

            const image = req.file ? `${req.file.filename}` : item.image; 

            await item.update({
                title,
                price,
                description,
                categoryId,
                image,
                highlighted: highlighted !== undefined ? highlighted : item.highlighted 
            });

            res.status(200).json(item);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
];

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll({
            include: [{
                model: Category,
                as: 'category',
                attributes: ['name']
            }]
        });

        res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ error: 'Failed to fetch items' });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findOne({
            where: { id },
            include: [{
                model: Category,
                as: 'category',
                attributes: ['name']
            }]
        });

        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json(item);
    } catch (error) {
        console.error('Error fetching item by ID:', error);
        res.status(500).json({ error: 'Failed to fetch item' });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;

        const item = await Item.findOne({ where: { id } });

        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        await item.destroy();
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ error: 'Failed to delete item' });
    }
};

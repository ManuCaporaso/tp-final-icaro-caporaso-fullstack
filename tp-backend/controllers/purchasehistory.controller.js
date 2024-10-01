const { PurchaseHistory, User, Item } = require('../models');

exports.createPurchase = async (req, res) => {
    const { purchases, sendPurchase } = req.body;

    try {
        const userId = req.userId;

        const purchaseRecords = await Promise.all(purchases.map(async (purchase) => {
            return await PurchaseHistory.create({
                userId,
                itemId: purchase.itemId,
                quantity: purchase.quantity,
                totalPrice: purchase.totalPrice,
                sendPurchase: sendPurchase
            });
        }));

        res.status(201).json({ message: 'Compra realizada con éxito', purchaseRecords });
    } catch (error) {
        console.error('Error al crear las compras:', error);
        res.status(500).json({ error: 'Error al crear las compras' });
    }
};

exports.getPurchaseHistory = async (req, res) => {
    try {
        const userId = req.userId;

        const purchases = await PurchaseHistory.findAll({
            where: { userId },
            include: [
                { model: Item, attributes: ['title', 'price', 'description'] },
                // { model: User, attributes: ['firstName', 'lastName', 'email', 'phone'] },  
            ],
        });

        //     const user = await User.findByPk(userId, {
        //         attributes: ['firstName', 'lastName', 'email', 'phone']
        //     });

        // res.status(200).json({ user, purchases }); 
        res.status(200).json({ purchases });
    } catch (error) {
        console.error('Error al obtener el historial de compras:', error);
        res.status(500).json({ error: 'Error al obtener el historial de compras' });
    }
};


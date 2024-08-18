const express = require('express');
const router = express.Router();
const { Sale } = require('../models');

router.post('/', async (req, res) => {
    const { productId, quantity, totalAmount } = req.body;
    try {
        const newSale = await Sale.create({ product_id: productId, quantity, total_amount: totalAmount });
        res.json(newSale);
    } catch (error) {
        console.error('Error creating sale:', error);
        res.status(500).json({ error: 'Error creating sale' });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { Product, Category  } = require('../models');

router.post('/', async (req, res) => {
    const { name, price, categoryId } = req.body;
    try {
        const newProduct = await Product.create({ name, price, category_id: categoryId });
        res.json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Error creating product' });
    }
});

router.get('/', async (req, res) => {
    try {
        console.log('Fetching products...');
        const products = await Product.findAll({
            include: [{
                model: Category,
                attributes: ['name', 'gst_rate'] 
            }]
        });
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error.stack || error); 
        res.status(500).json({ error: 'Error fetching products' });
    }
});


module.exports = router;

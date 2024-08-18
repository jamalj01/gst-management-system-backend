const express = require('express');
const router = express.Router();
const { Category } = require('../models');

router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Error fetching categories' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        
        if (!name) {
            return res.status(400).json({ error: 'Category name is required' });
        }

        const newCategory = await Category.create({ name });
        res.status(201).json(newCategory);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ error: 'Error creating category' });
    }
});

module.exports = router;

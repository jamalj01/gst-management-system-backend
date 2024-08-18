const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const saleRoutes = require('./routes/saleRoutes');
// const summaryRoutes = require('./routes/summaryRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/sales', saleRoutes);
// app.use('/api/summary', summaryRoutes);

sequelize.sync({ alter: true }).then(() => {
    app.listen(3001, () => {
        console.log('Server is running on http://localhost:3001');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

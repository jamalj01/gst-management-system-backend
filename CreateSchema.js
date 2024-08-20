const db = require('./models/db.js');

exports.handler = async (event, context) => {
    try {
        const sql = ` 
        CREATE TABLE IF NOT EXISTS categories (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            gst_rate DECIMAL(5,2) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            category_id INT,
            price DECIMAL(10,2),
            FOREIGN KEY (category_id) REFERENCES categories(id)
        );

        CREATE TABLE IF NOT EXISTS sales (
            id INT AUTO_INCREMENT PRIMARY KEY,
            product_id INT,
            quantity INT,
            sale_date DATE,
            FOREIGN KEY (product_id) REFERENCES products(id)
        );

        INSERT INTO categories (name, gst_rate) VALUES
        ('Food', 5.00),
        ('Footwear', 10.00),
        ('Electronics', 20.00),
        ('Clothing', 15.00),
        ('Books', 0.00)
        ON DUPLICATE KEY UPDATE name=name;

        INSERT INTO products (name, category_id, price) VALUES
        ('Apple', 1, 1.50),
        ('Bread', 1, 2.00),
        ('Running Shoes', 2, 50.00),
        ('Smartphone', 3, 300.00),
        ('T-Shirt', 4, 20.00),
        ('Programming Book', 5, 30.00)
        ON DUPLICATE KEY UPDATE name=name;

        INSERT INTO sales (product_id, quantity, sale_date) VALUES
        (1, 10, '2024-08-15'),
        (2, 5, '2024-08-15'),
        (3, 2, '2024-08-15'),
        (4, 1, '2024-08-15'),
        (5, 3, '2024-08-15'),
        (6, 4, '2024-08-15')
        ON DUPLICATE KEY UPDATE product_id=product_id;
        `;

        // Execute the SQL query
        const results = await new Promise((resolve, reject) => {
            db.query(sql, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        console.log("Tables created and data inserted successfully:", results);

        return {
            status: "success",
            data: results
        };

    } catch (error) {
        console.error('Error during database query:', error);
        return {
            status: "error",
            message: error.message
        };
    }
};

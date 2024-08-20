const mysql = require('mysql');

// Create the connection object
const db = mysql.createConnection({ 
    host: 'bb72n5gts4xq1k9yk1h7-mysql.services.clever-cloud.com',
    user: 'uf2hf9aebcknb5mi',
    password: 'tUL58InTFSZ54EqaSj88',
    database: 'bb72n5gts4xq1k9yk1h7',
    port: 3306,
    multipleStatements: true, // Enable execution of multiple SQL statements
});

// Establish the connection
db.connect((err) => {
    if(err) { 
        console.error('Not connected to MySQL Server...', err);
        return;
    }
    console.log("MySQL connection established");
});

module.exports = db;

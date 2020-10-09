const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Un@l1992',
        database: 'news_portal'
    });
};
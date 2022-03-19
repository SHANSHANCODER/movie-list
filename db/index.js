var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    database: 'movies',
    password: ''
})
connection.connect();

module.exports.connection = connection
var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    database: 'movies',
    password: ''
})
connection.connect();

// var search = function (term, callback){
//     var searchterm = `select * from movies where title like `%${term}%` `
// connection.query(searchterm, function(err,result){
//     callback(err,result);
// })
// }


module.exports.connection = connection;

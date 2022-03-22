//getall function 
//create function 
var db = require('../db/index.js');

module.exports = {
    //getAll movies 
getAll:function (callback){
db.connection.query('select * from movies',(err,result)=>{
    if (err) {
      throw err
    } else {
      callback (err,result);
    }
})
},
//search for perticular term 
 search: function (term, callback) {
    var searchterm = 'select * from movies where title like ' + '"'+`%${term}%`+'"'; //???
    console.log('searchterm>>>>>>',searchterm)
    db.connection.query(searchterm, function (err, result) {
        console.log('search result>>>>>>>',result);
        callback(err, result);
    })
},
create: function(input,callback){
  let movietobeAdd='insert into movies (title) values ('+ '"'+input+'")'
  db.connection.query(movietobeAdd,function(err,result){
    if (err){
      callback (err)
    } else {
     callback(null,result)
    }

  } )
}


}

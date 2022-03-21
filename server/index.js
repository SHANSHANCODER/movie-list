const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
//const db = require ('../db/index.js')
const model = require ('../model/index.js')
//const search= require('../db/index.js')

app.use(express.static('client/dist'));
app.use(express.json());
app.get('/api/movies',(req,res)=>{
  // console.log('req',req);
   console.log('backend:get request made');
   model.getAll((err,result)=>{
     if (err){
       res.send('err')
     } else {
      res.status(200).send(result)

     }
   })
  
})
//here, get the search keyword and send it to model to query database, then send the respond back

app.get('/api/movies/search', (req, res)=> {
  console.log(req.query.term);
  model.search(req.query.term,(err,result)=>{
    if (err){
      res.send('err')
    } else {
      res.status(200).send(result)
    }
  })
  
 // res.send('Response send to client::'+req.query.term);

});

//here. send respond to the search request. 
//if someone hit "/api/movies/search?term=...."
//send the code back, and get the endpoint
//retrieve the path, use model.readall as callback 
//model.readall quary db. get search result , callback get request and send 
//respond back 







app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


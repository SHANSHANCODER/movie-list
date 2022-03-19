const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require ('../db/index.js')

app.use(express.static('client/dist'));

app.get('/api/movies',(req,res)=>{
  // console.log('req',req);
  // console.log('res',res);
  db.connection.query('select * from movies',(err,result)=>{
    if (err) {
      throw err
    } else { 
      
      res.send (result);
    }
  })
})



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


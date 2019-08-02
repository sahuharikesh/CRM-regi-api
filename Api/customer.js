var connection = require('../config');
const express = require('express');
const router = express.Router();

router.post('/addcustomer',function(req,res){
  var customers={
    "cname":req.body.cname,
    "email":req.body.email,
    "phoneno":req.body.phoneno,
    "password":req.body.password
    }
      connection.query('insert into customers set ?',customers, function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:'there are some error with query'
          })
        }else{
            res.json({
  
              status:true,
              data:results,
              message:'Customer added sucessfully'
          })
        }
      });
});

router.get('/getdata', function(req,res){
  connection.query('select * from customers',(error,rows,fields)=>{
    if (!error)
      res.send(rows);
      else
      console.log(error);
  });
});

router.get('/getdata/:id', (req,res)=>{
  connection.query('select * from customers where id= ?',[req.params.id],(error,rows,fields)=>{
    if (!error)
      res.send(rows);
      else
      console.log(error);
  });
});

router.put('/updatedata/:id', (req,res)=>{
 let sql=`update customers set cname= '${req.body.cname}',email='${req.body.email}' where id= '${req.params.id}'`;
  connection.query(sql,(error,rows,fields)=>{
    if (!error)
      res.send('Updated successfully');
      else
      console.log(error);
  });
});

router.delete('/deletedata/:id', (req,res)=>{
  connection.query('delete from customers where id= ?',[req.params.id],(error,rows,fields)=>{
    if (!error)
      res.send('Customer deleted successfully');
      else
      console.log(error);
  });
});

module.exports = router;
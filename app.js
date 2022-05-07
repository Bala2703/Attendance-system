
// const express=require('express');
var express = require('express');
var app = express();
var cors = require('cors');
var mysql = require("mysql");
const { json } = require('express');

// var bodyParser = require('body-parser');
var PORT=3000;
app.use(cors());
// app.use(express.urlencoded({ extended: false }));

var conn = mysql.createConnection({
  host: "localhost",
  user: "Bala",
  password: "Bala@2703",
  database:"test"
});

conn.connect();

app.get('/user', (req,res) => { 
     
conn.query("select * from user", function(err,results){
    if(err){
        console.log(err);
        return;
    }
res.json(results);
    // console.log(JSON.stringify( results));
});})

app.get('/hour',(req,res) => {
    conn.query(" SELECT * FROM user WHERE NAME = '"+req.query.NAME+"'AND DATE BETWEEN '"+req.query.date+"' and '"+req.query.end+"'", function (err, result) {
          if (err) throw err;
          var total_hour=0
           for(var i=0;i<=result.length-1;i++){
             total_hour += result[i].TOTAL_HOUR; 
             console.log(result[i].TOTAL_HOUR); 
             
           }
console.log(result.length)
           res.json(total_hour);
           console.log(req.query.date,req.query.end)
          

           console.log(total_hour); 
         
        })
        
})



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
  }); 
  

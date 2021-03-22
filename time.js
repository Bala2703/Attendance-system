const csv = require('csv-parser');
// const bodyParser=require('body-Parser');
// const cors=require('cors');
const fs = require('fs');
var express = require('express');
var app = express();
var PORT = 3000;
var mysql = require('mysql');
// var usr = [];
app.use(express.urlencoded({ extended: false }));
// app.use(cors());
// app.use(bodyParser.json());
var pool  = mysql.createPool({
  connectionLimit:10,
  host: "localhost",
  user: "bala1",
  password: "Bala@2703",
  database:"test"
});


app.post('/user', function (req, res) {
  // var users=req.body
  // console.log(users);
  // usr.push(users);
  // res.send("users added!");
  console.log(req.body)
  // res.status(200).send({"message":"datareceived"})
  fs.createReadStream('MC STUDENTS Details.csv')
.pipe(csv())
.on('data', (row) => {
  if(row['uid']===req.body.station)
  {

pool.getConnection(function(err,connection) {
  if (err) throw err;
  // console.log("Connected!");
  var date = new Date(); 
  var workHour;
  connection.query("SELECT * FROM user WHERE NAME = 'AADARSH K' ", function (err, result) {
    if (err) throw err;



  });

});

 
  // console.log()
  // console.log(row['ID']);
  // console.log(req.body.status);
  }
 
})
// .on('end', () => {
//   console.log('CSV file successfully processed');
//   res.send("ok");
// });
  // console.log(req.body.station);
  // console.log(req.body.status);
  // res.end();
});
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
}); 


function myFunction(value, index, array) {

}
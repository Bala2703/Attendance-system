const csv = require('csv-parser');
const fs = require('fs');
var express = require('express');
var app = express();
var PORT = 3000;
var mysql = require('mysql');

app.use(express.urlencoded({ extended: false }));

var pool  = mysql.createPool({
  connectionLimit:10,
  host: "10.10.110.2",
  user: "iotadmin",
  password: "12345678",
  database:"espdemo"
});


app.post('/', function (req, res) {
  fs.createReadStream('MC STUDENTS Details.csv')
.pipe(csv())
.on('data', (row) => {
  if(row['uid']===req.body.station)
  {

pool.getConnection(function(err,connection) {
  if (err) throw err;
  // console.log("Connected!");
 
  var sql = "INSERT INTO  users (ROLL, NAME,RFID) VALUES ('"+row["ID"]+"', '"+row["NAME"]+"','"+req.body.status+"')";
connection.query(sql, function (err, result) {
  
  if (err) throw err;
  // console.log("1 record inserted");
  connection.release()
  res.send("ok")
  // connection.end();
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





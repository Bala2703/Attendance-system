const csv = require('csv-parser');
const fs = require('fs');
var express = require('express');
var moment = require('moment'); 
var app = express();
var PORT = 4000;
var mysql = require('mysql');
// moment().valueOf();
// moment().unix()
app.use(express.urlencoded({ extended: false }));
var pool  = mysql.createPool({
  connectionLimit:10,
  host: "localhost",
  user: "bala1",
  password: "Bala@2703",
  database:"test",
  dateStrings:true,
});

app.post('/user', function (req, res) {
  console.log(req.body)
  fs.createReadStream('MC STUDENTS Details.csv')
.pipe(csv())
.on('data', (row) => {
  if(row['uid']===req.body.station)
  {
console.log(row.ID);
pool.getConnection(function(err,connection) {
  if (err) throw err;
  // console.log("Connected!");
  var date = new Date(); 
  Date.prototype.toUnixTime = function() { return date.getTime()/1000|0 };
  Date.time = function() { return new Date().toUnixTime(); }
  // SELECT * FROM user WHERE NAME = 'AADARSH K' 
  connection.query(" SELECT * FROM user WHERE NAME = '" +row["NAME"]+"'", function (err, result) {
    if (err) throw err;
  
   
  //  connection.query(" SELECT * FROM user WHERE NAME = '" +row["NAME"]+"'AND DATE BETWEEN '1616210592' and '1616212296'", function (err, result) {
  //   if (err) throw err;
  //   var total_hour=0
  //    for(var i=0;i<=result.length-1;i++){
  //      total_hour += result[i].TOTAL_HOUR; 
  //      console.log(result[i].TOTAL_HOUR); 
  //    }
  //    console.log(total_hour);
  // })
    //  console.log(result[result.length-1].NAME)
    //  console.log(row.NAME)
  
    // result[result.length-1].NAME===row.NAME &&
    try{
      if(  req.body.status === '21-03-2021' && result[result.length-1].ENTRY==="IN"){
      
         var stringTime = result[result.length-1].START_TIME;
    console.log(stringTime);
    
    var entryStatus = result[result.length-1].ENTRY;
    var startDate = moment(stringTime, 'YYYY-M-DD HH:mm:ss')
    var endDate = moment(moment().format('YYYY-M-DD HH:mm:ss'), 'YYYY-M-DD HH:mm:ss')
    var minuteDiff = endDate.diff(startDate, 'minutes')
    console.log(minuteDiff);   
        if(1){
          // console.log(entryStatus);
              if(entryStatus=="IN"){
                var startDate = moment(stringTime, 'YYYY-M-DD HH:mm:ss')
    var endDate = moment(moment().format('YYYY-M-DD HH:mm:ss'), 'YYYY-M-DD HH:mm:ss')
    var hourDiff = endDate.diff(startDate, 'hour')
                // entrySend="OUT";
                var sql =  "UPDATE user SET TIME = '"+moment().format('YYYY-M-DD HH:mm:ss')+"',ENTRY = 'OUT' ,TOTAL_HOUR = '"+hourDiff+"' WHERE NAME = '"+ row["NAME"]+"'AND ENTRY = 'IN'";
                connection.query(sql,function (err, result) {
                  if (err) throw err;
                  // connection.release()
                  res.send("ok")
                  console.log(result.affectedRows + " record(s) updated");
                });
              // console.log(stripedData);
              // var workingHour =date.getHours() - parseInt(stripedData[0])
              // var workingMinutes = date.getMinutes() - parseInt(stripedData[1]);
              // connection.query("SELECT * FROM hour WHERE NAME = '"+row["NAME"]+"' ", function (err, result) {
              //   if (err) throw err;
              //   console.log(result);
              //   var stringWorkTime = result[result.length-1].TOTAL_TIME;
              //   var stripedWorkData = stringWorkTime.split(":");
              //   var totalWorkHour = parseInt(stripedWorkData[0])+workingHour;
              //   var totalWorkMinute = parseInt(stripedWorkData[1])+workingMinutes;
              //   var totalWorkTime = totalWorkHour +":" +totalWorkMinute;
              //   var sqlfinal = "UPDATE hour SET TOTAL_TIME = '"+totalWorkTime+"' WHERE NAME = '"+ row["NAME"]+"'";
              //   connection.query(sqlfinal, function (err, result) {
              //     if (err) throw err;
              //     console.log(result.affectedRows + " record(s) updated");
              //   });
              // });    
            }
              // else{
              //   entrySend="IN"  
              //   var sql = "INSERT INTO  user (ROLL,NAME,DATE,START_TIME,TIME,ENTRY,TOTAL_HOUR) VALUES ('"+row["ID"]+"', '"+row["NAME"]+"','"+req.body.status+"','"+date.toUnixTime()+"','"+"-"+"','"+"IN"+"','"+09+"')";
              //   connection.query(sql, function (err, result) {
                  
                  // if (err) throw err;
                  // console.log("1 record inserted");
                  // connection.release()
                  // res.send("ok")
                  // connection.end();
              //   });
              // }
             
            }
            else{
              console.log("wait for the delay");
            }
      }else{
        var sql = "INSERT INTO  user (ROLL,NAME,DATE,START_TIME,TIME,ENTRY,TOTAL_HOUR) VALUES ('"+row["ID"]+"', '"+row["NAME"]+"','"+date.toUnixTime()+"','"+ moment().format('YYYY-M-DD HH:mm:ss')+"','"+"-"+"','"+"IN"+"','0')";
        connection.query(sql, function (err, result) {
          
          if (err) throw err;
          console.log("1 record inserted");
          // connection.release()
          res.send("ok")
          // connection.end();
        });
      }
  } catch (err){
                var sql = "INSERT INTO  user (ROLL,NAME,DATE,START_TIME,TIME,ENTRY,TOTAL_HOUR) VALUES ('"+row["ID"]+"', '"+row["NAME"]+"','"+date.toUnixTime()+"','"+moment().format('YYYY-M-DD HH:mm:ss')+"','"+"-"+"','"+"IN"+"','0')";
                connection.query(sql, function (err, result) {
                  
                  if (err) throw err;
                  console.log("1 record inserted");
                  // connection.release()
                  res.send("ok")
                  // connection.end();
                });
  }
   

   
    
    // var stripedData = stringTime.split(":");
    // date.getMinutes() - parseInt(stripedData[1])>
    // date.toUnixTime()-stringTime>180
    
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





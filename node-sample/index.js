console.log('Hello world, i\'m running in container');
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

var mysql = require('mysql');



var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

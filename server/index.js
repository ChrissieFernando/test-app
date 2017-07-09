// server setup
var express = require('express')
var app = express();
app.listen(5858,function(err){
  console.log("..............................................");
  if(err) console.log("error while connecting to server \n" + Date());
  else console.log("Server is running on port 3000 \n" + Date());
  console.log("..............................................");
});
module.exports = app;

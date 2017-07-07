var app = require('./server');
app.use('/',function(req,res,next){
  console.log("welcome to my website");
  next();
});
app.get('/',function(req,res){
  res.send("hello bro");
});

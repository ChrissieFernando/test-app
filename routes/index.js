var router = require('express').Router();
router.use('/',function(req,res,next){
  console.log("welcome to my website");
  next();
});
router.get('/',function(req,res){
  res.render('home');
});

module.exports = router;

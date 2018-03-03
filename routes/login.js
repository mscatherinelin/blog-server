var express = require('express');
var db = require('../mongoDbConnectionManager');
var router = express.Router();
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);


router.get('/', function(req, res, next) {
    if(!req.query.username|| !req.query.password){
        console.log("missing!!");
        res.render('login');
    }
    db.getUsersPassword(req.query.username)
    .then(data =>
    {
        console.log(data);
    });
    //bcrypt.compare(req.query.password, hash, function(err,res){
     //   console.log(hash);
      //  console.log(req.query.password);
       // if(res)
         //   console.log('yay');
        //else
         //   console.log('boo');
    //});
    res.send(600);

});

module.exports = router;
  
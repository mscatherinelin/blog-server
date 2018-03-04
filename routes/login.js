var express = require('express');
var db = require('../mongoDbConnectionManager');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var salt = bcrypt.genSaltSync(10);


router.get('/', function(req, res, next) {
    if(!req.query.username|| !req.query.password){
        console.log("missing!!");
        res.render('login');
    }
    db.getUsersPassword(req.query.username)
    .then(data =>
    {
        bcrypt.compare(req.query.password, data.password, function(err,result){
            if(result){
               var token = jwt.sign(
                   {"exp":Math.floor(Date.now() / 1000) + 2*(60 * 60), "usr": req.query.username},
                   "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c"
                );
                res.cookie('name', token);
                res.send('200');
            }
            else
                res.render('login');
        });
    });
});

module.exports = router;
  
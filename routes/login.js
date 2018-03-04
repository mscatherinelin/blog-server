var express = require('express');
var db = require('../mongoDbConnectionManager');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var salt = bcrypt.genSaltSync(10);


router.get('/', function (req, res, next) {
    var redirect = "/";
    if (req.query.redirect)
        redirect = req.query.redirect;
    if (!req.query.username || !req.query.password) {
        console.log("missing!!");
        res.render('login', {redirect: redirect});
    }

    db.getUsersPassword(req.query.username)
        .then(data => {
            bcrypt.compare(req.query.password, data.password, function (err, result) {
                if (result) {
                    var token = jwt.sign(
                        { "exp": Math.floor(Date.now() / 1000) + 2 * (60 * 60), "usr": req.query.username },
                        "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c"
                    );
                    console.log("In login success");
                    res.cookie('name', token);
                    if (req.query.redirect) {
                        res.redirect(req.query.redirect);
                        return;
                    }
                    else {
                        res.send(200);
                        return;
                    }
                }
                else {
                    console.log('failed auth');
                    res.redirect('login?redirect=' + redirect);
                }
            });
        });
});

module.exports = router;

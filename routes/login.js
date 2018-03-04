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
        res.render('login', { redirect: redirect });
        return;
    }
    db.getUsersPassword(req.query.username)
        .then(data => {
            bcrypt.compare(req.query.password, data.password, function (err, result) {
                if (result) {
                    var token = jwt.sign(
                        {
                            "exp": Math.floor(Date.now() / 1000) + 2 * (60 * 60),
                            "usr": req.query.username
                        },
                        "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c",
                        {
                            header:
                                {
                                    "alg": "HS256",
                                    "typ": "JWT"
                                }
                        }
                    );
                    console.log("Login Success...");
                    res.cookie('name', token);
                    if (req.query.redirect) {
                        res.redirect(req.query.redirect);
                        return;
                    }
                    else {
                        res.sendStatus(200);
                        return;
                    }
                }
                else {
                    console.log('Login failed...');
                    res.redirect('login?redirect=' + redirect);
                    return;
                }
            });
        });
});

module.exports = router;

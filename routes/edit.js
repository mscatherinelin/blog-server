var express = require('express');
var path = require('path');
var jwt = require('jsonwebtoken');
var router = express.Router();
var authenticateUser = function (req, res, next, then) {
    var cookie = req.cookies.name;
    if (!cookie) {
        res.redirect('/login?redirect=/edit/');
        return;
    }
    var decodedCookie = jwt.decode(cookie, { complete: true });
    console.log('Cookie Header: ' + JSON.stringify(decodedCookie.header));
    console.log('Cookie Payload: ' + JSON.stringify(decodedCookie.payload));
    jwt.verify(cookie, "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c", function (err, decoded) {
        if (err) {
            console.log('Error: ' + err);
            res.redirect('/login?redirect=/edit/');
            return;
        }
        else {
            console.log('Cookie Verified...');
            then();
        }
    });
}


router.get('/', function (req, res, next) {
    authenticateUser(req, res, next, function () {
        res.sendFile(path.join(__dirname, "../edit/index.html"));
    });
});


router.get('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname, "../edit", req.path));
});


module.exports = router;
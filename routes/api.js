var express = require('express');
var db = require('../mongoDbConnectionManager');
var router = express.Router();
var jwt = require('jsonwebtoken');

var authenticateUser = function (req, res, next, then) {
    // then();
    // return;
    var cookie = req.cookies.jwt;
    if (!cookie) {
        console.log("No cookie present");
        res.sendStatus(401);
        return;
    }
    var decodedCookie = jwt.decode(cookie, { complete: true });
    console.log('Cookie Header: ' + JSON.stringify(decodedCookie.header));
    console.log('Cookie Payload: ' + JSON.stringify(decodedCookie.payload));
    //console.log('Now Seconds: ' +  Math.floor(new Date().getTime()/1000));
    jwt.verify(cookie, "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c", function (err, decoded) {
        if (err) {
            console.log('Error: ' + err);
            res.sendStatus(401);
            return;
        }
        else if (decoded.usr != req.params.username) {
            console.log('Error: requst user name does not match cookie username');
            res.sendStatus(401);
            return;
        }
        else {
            console.log('Cookie Verified...');
            then();
        }
    });
}

router.get('/:username', function (req, res, next) {
    authenticateUser(req, res, next, function () {
        if (!req.params.username) {
            console.log("GET api/username: no username supplied");
            res.sendStatus(400);
            return;
        }
        db.postsByUserName(req.params.username).then(data => {
            //remove the key from mongo
            data.forEach(e => {
                delete e._id;
            });
            res.json(data);
        });
    });
})

router.get('/:username/:postid', function (req, res, next) {
    authenticateUser(req, res, next, function () {
        if (!req.params.username || !req.params.postid) {
            console.log("GET api/username/postid: no username or postid supplied");
            res.sendStatus(404);
            return;
        }
        db.postByUserNameAndPostId(req.params.username, parseInt(req.params.postid)).then(data => {
            if (!data) {
                console.log("GET api/username/postid: no entry found");
                res.sendStatus(404);
                return;
            }
            //remove the key from mongo
            delete data._id;
            res.json(data);
        });
    });
})

router.post('/:username/:postid', function (req, res, next) {
    authenticateUser(req, res, next, function () {
        if (!req.params.username || !req.params.postid) {
            console.log("POST api/username/postid: no username or postid supplied");
            res.sendStatus(400);
            return;
        }
        db.postByUserNameAndPostId(req.params.username, parseInt(req.params.postid)).then(data => {
            if (data) {
                console.log("POST api/username/postid: post already found");
                res.sendStatus(400);
                return;
            }
            var body = req.body;
            if (!body || !body.title || !body.body) {
                console.log("POST api/username/postid: bad json");
                res.sendStatus(400);
                return;
            }
            var newPost =
                {
                    postid: parseInt(req.params.postid),
                    created: new Date().getTime(),
                    modified: new Date().getTime(),
                    username: req.params.username,
                    title: body.title,
                    body: body.body
                };
            db.insertPost(newPost).then(x => {
                console.log("POST api/username/postid: created")
                res.sendStatus(201);
            });
        });
    });
})

router.put('/:username/:postid', function (req, res, next) {
    authenticateUser(req, res, next, function () {
        if (!req.params.username || !req.params.postid) {
            console.log("PUT api/username/postid: no username or postid supplied");
            res.sendStatus(400);
            return;
        }
        db.postByUserNameAndPostId(req.params.username, parseInt(req.params.postid)).then(data => {
            if (!data) {
                console.log("PUT api/username/postid: post not found");
                res.sendStatus(400);
                return;
            }
            var body = req.body;
            if (!body || !body.title || !body.body) {
                console.log("PUT api/username/postid: bad json");
                res.sendStatus(400);
                return;
            }
            var newPost =
                {
                    modified: new Date().getTime(),
                    title: body.title,
                    body: body.body
                };
            db.updatePost(data._id, newPost).then(x => {
                console.log("PUT api/username/postid: updated");
                res.sendStatus(200);
            });
        });
    });
})

router.delete('/:username/:postid', function (req, res, next) {
    authenticateUser(req, res, next, function () {
        if (!req.params.username || !req.params.postid) {
            console.log("PUT api/username/postid: no username or postid supplied");
            res.sendStatus(400);
            return;
        }
        db.postByUserNameAndPostId(req.params.username, parseInt(req.params.postid)).then(data => {
            if (!data) {
                console.log("DELETE api/username/postid: post not found");
                res.sendStatus(400);
                return;
            }
            db.deletePost(data._id).then(x => {
                console.log("DELETE api/username/postid: deleted");
                res.sendStatus(200);
            });
        });
    });
})

module.exports = router;
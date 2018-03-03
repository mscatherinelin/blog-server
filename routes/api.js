var express = require('express');
var db = require('../mongoDbConnectionManager');
var router = express.Router();

router.get('/:username', function (req, res, next) {
    if (!req.params.username) {
        console.log("GET api/username: no username supplied");
        res.send(400);
        return;
    }
    db.postsByUserName(req.params.username).then(data => {
        //remove the key from mongo
        data.forEach(e => {
            delete e._id;
        });
        res.json(data);
    })
})
router.get('/:username/:postid', function (req, res, next) {
    if (!req.params.username || !req.params.postid) {
        console.log("GET api/username/postid: no username or postid supplied");
        res.send(404);
        return;
    }
    db.postByUserNameAndPostId(req.params.username, parseInt(req.params.postid)).then(data => {
        if (!data) {
            console.log("GET api/username/postid: no entry found");
            res.send(404);
            return;
        }
        //remove the key from mongo
        delete data._id;
        res.json(data);
    })
})
router.post('/:username/:postid', function (req, res, next) {
    if (!req.params.username || !req.params.postid) {
        console.log("GET api/username/postid: no username or postid supplied");
        res.send(404);
        return;
    }
    db.postByUserNameAndPostId(req.params.username, parseInt(req.params.postid)).then(data => {
        if (data) {
            console.log("POST api/username/postid: post already found");
            res.send(400);
            return;
        }
        var body = req.body;
        if (!body || !body.title || !body.body) {
            console.log("POST api/username/postid: bad json");
            res.send(400);
        }
        db.maxPostId().then(val => {
            var newPost =
                {
                    postid: parseInt(val) + 1,
                    created: new Date().getTime(),
                    modified: new Date().getTime(),
                    title: body.title,
                    body: body.body
                };
            db.insertPost(newPost).then(x => {
                console.log("POST api/username/postid: created")
                res.send(201);
            });
        });
    });
})

module.exports = router;
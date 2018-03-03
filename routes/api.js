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
        console.log("POST api/username/postid: no username or postid supplied");
        res.send(400);
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
            res.send(201);
        });
    });
})
router.put('/:username/:postid', function (req, res, next) {
    if (!req.params.username || !req.params.postid) {
        console.log("PUT api/username/postid: no username or postid supplied");
        res.send(400);
        return;
    }
    db.postByUserNameAndPostId(req.params.username, parseInt(req.params.postid)).then(data => {
        if (!data) {
            console.log("PUT api/username/postid: post not found");
            res.send(400);
            return;
        }
        var body = req.body;
        if (!body || !body.title || !body.body) {
            console.log("PUT api/username/postid: bad json");
            res.send(400);
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
            res.send(200);
        });
    });
})

router.delete('/:username/:postid', function (req, res, next) {
    if (!req.params.username || !req.params.postid) {
        console.log("PUT api/username/postid: no username or postid supplied");
        res.send(400);
        return;
    }
    db.postByUserNameAndPostId(req.params.username, parseInt(req.params.postid)).then(data => {
        if (!data) {
            console.log("DELETE api/username/postid: post not found");
            res.send(400);
            return;
        }
        db.deletePost(data._id).then(x => {
            console.log("DELETE api/username/postid: deleted");
            res.send(200);
        });
    });
})



module.exports = router;
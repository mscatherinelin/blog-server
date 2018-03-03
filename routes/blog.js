var express = require('express');
var db = require('../mongoDbConnectionManager');
var router = express.Router();

router.get('/:username', function(req, res, next) {
    console.log('username');
    var startIndex = 0;
    if(req.query.start)
    {
        console.log("with start");
        startIndex = parseInt(req.query.start);
    }
    else
    {
        console.log("without start");
    }
    db.postsByUserName(req.params.username)
    .then(data =>
    {
        //console.log(data);
        var sortedData = data.sort((a,b) => a.postid - b.postid).filter(x => x.postid >= startIndex);
        var nextPost = sortedData.slice(5, 5);
        var nextPostId = 0;
        if(nextPost != null)
            nextPostId = nextPost.postid;

        res.render('blogList', 
        {
            data: sortedData.slice(0, 5),
            isNext: sortedData.length > 5,
            nextId: nextPostId
        });
    });
  });

router.get('/:username/:postid', function(req, res, next) {
    //console.log('username/postid');
    db.postByUserNameAndPostId(req.params.username, parseInt(req.params.postid))
    .then(data =>
    {
        //console.log(data);
        res.render('blogSingle', 
        {
            data: data
        });
    });
  });
  
  module.exports = router;
  
var express = require('express');
var db = require('../mongoDbConnectionManager');
var router = express.Router();

router.get('/:username/:page?', function(req, res, next) {
    console.log(req.params.username);
    var startIndex = 0;
    if(req.params.page)
    {
        startIndex = req.params.page * 5;
    }
    db.postsByUserName(req.params.username)
    .then(data =>
    {
        var sortedData = data.sort((a,b) => a.postid - b.postid).slice(startIndex, startIndex + 5);
        res.render('blogList', 
        {
            data: sortedData,
            isNext: data.length >= startIndex + 5
        });
    })
  });

router.get('/:username/:postid', function(req, res, next) {
    res.json({
        response: "You sent me a GET request for ID " + req.params.postid,
    });
  });
  
  module.exports = router;
  
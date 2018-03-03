var express = require('express');
var db = require('../mongoDbConnectionManager');
var router = express.Router();

router.get('/:username/:start?', function(req, res, next) {
    console.log(req.params.username);
    var startIndex = 0;
    if(req.params.start)
    {
        startIndex = req.params.start;
    }
    db.postsByUserName(req.params.username)
    .then(data =>
    {
        var sortedData = data.sort((a,b) => a.postid - b.postid).filter(x => x.postid >= startIndex);
        res.render('blogList', 
        {
            data: sortedData.slice(0, 5),
            isNext: sortedData.length > 5
        });
    })
  });

router.get('/:username/:postid', function(req, res, next) {
    res.json({
        response: "You sent me a GET request for ID " + req.params.postid,
    });
  });
  
  module.exports = router;
  
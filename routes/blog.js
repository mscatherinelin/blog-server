var express = require('express');
var router = express.Router();

router.get('/:username', function(req, res, next) {
    res.json({
        response: "You sent me a GET request for " + req.params.username,
    });
  });

router.get('/:username/:postid', function(req, res, next) {
    res.json({
        response: "You sent me a GET request for ID " + req.params.postid,
    });
  });
  
  module.exports = router;
  
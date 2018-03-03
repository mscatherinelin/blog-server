var express = require('express');
var db = require('../mongoDbConnectionManager');
var router = express.Router();

router.get('/:username', function(req, res, next) {
    console.log(req.params.username);
    db.getDbClient()
    .collection('Posts')
    .find({'username' : req.params.username})
    .toArray(function(err, data)
    {
        console.log(JSON.stringify(data));
        res.json(data);
    });
  });

router.get('/:username/:postid', function(req, res, next) {
    res.json({
        response: "You sent me a GET request for ID " + req.params.postid,
    });
  });
  
  module.exports = router;
  
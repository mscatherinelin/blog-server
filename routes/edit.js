var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(path.join(__dirname, '../edit'));
    res.sendFile(path.join(__dirname, "../edit/index.html"));
});
router.get('/*', function(req, res, next) {
    console.log(path.join(__dirname, "..", req.path));
    res.sendFile(path.join(__dirname, "../edit", req.path));
});


  module.exports = router;
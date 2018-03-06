var express = require('express');
var commonmark = require('commonmark');
var db = require('../mongoDbConnectionManager');
var router = express.Router();

router.get('/:username', function (req, res, next) {
    var startIndex = 0;
    if (req.query.start) {
        console.log("with start");
        startIndex = parseInt(req.query.start);
    }
    else {
        console.log("without start");
    }
    db.postsByUserName(req.params.username)
        .then(data => {
            var sortedData = data.sort((a, b) => a.postid - b.postid).filter(x => x.postid >= startIndex);
            sortedData.forEach(e => {
                var reader2 = new commonmark.Parser();
                var writer2 = new commonmark.HtmlRenderer();
                var parsed2 = reader2.parse(e.title);
                e.title = writer2.render(parsed2);

                var reader = new commonmark.Parser();
                var writer = new commonmark.HtmlRenderer();
                var parsed = reader.parse(e.body);
                e.body = writer.render(parsed);
            });
            var nextPost = sortedData.slice(5, 6);
            var nextPostId = 0;
            console.log(JSON.stringify(nextPost))
            if (nextPost[0] != null)
                nextPostId = nextPost[0].postid;

            res.render('blogList',
                {
                    data: sortedData.slice(0, 5),
                    isNext: sortedData.length > 5,
                    nextPostPathId: '/blog/' + req.params.username + '?start=' + String(nextPostId)
                });
        });
})

router.get('/:username/:postid', function (req, res, next) {
    db.postByUserNameAndPostId(req.params.username, parseInt(req.params.postid))
        .then(data => {

            var reader2 = new commonmark.Parser();
            var writer2 = new commonmark.HtmlRenderer();
            var parsed2 = reader2.parse(data.title);
            data.title = writer2.render(parsed2);

            var reader = new commonmark.Parser();
            var writer = new commonmark.HtmlRenderer();
            var parsed = reader.parse(data.body);
            data.body = writer.render(parsed);
            res.render('blogSingle',
                {
                    data: data
                });
        });
})

module.exports = router;

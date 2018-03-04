
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'BlogServer';

var _db;

module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(url, function (err, db) {
      _db = db;
      return callback(err);
    });
  },
  getDbClient: function () {
    return _db.db(dbName);
  },
  getPostsCollection: function () {
    return module.exports.getDbClient().collection('Posts');
  },
  getUsersCollection: function () {
    return module.exports.getDbClient().collection('Users');
  },
  postsByUserName: function (username) {
    return module.exports.getPostsCollection().find({ 'username': username }).sort({ postid: +1}).toArray();
  },
  postByUserNameAndPostId: function (username, postId) {
    return module.exports.getPostsCollection().findOne({ 'username': username, 'postid': postId });
  },
  maxPostId: function () {
    return module.exports.getPostsCollection().find().sort({ postid: -1 }).limit(1).toArray();
  },
  insertPost: function (post) {
    return module.exports.getPostsCollection().insertOne(post);
  },
  updatePost: function (_id, post) {
    return module.exports.getPostsCollection().updateOne({ _id: _id },
      {
        $set:
          {
            title: post.title,
            body: post.body,
            modified: post.modified
          }
      });
  },
  deletePost: function(_id)
  {
    return module.exports.getPostsCollection().deleteOne({_id: _id});
  },
  getUsersPassword: function(username) {
    return module.exports.getDbClient().collection('Users').findOne({ 'username': username });
  }
};
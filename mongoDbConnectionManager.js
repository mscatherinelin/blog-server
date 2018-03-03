
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'BlogServer';

var _db;

module.exports = {
  connectToServer: function( callback ) {
    MongoClient.connect( url , function( err, db ) {
      _db = db;
      return callback(err);
    } );
  },
  getDbClient: function() {
    return _db.db(dbName);
  },
  getPostsCollection: function()
  {
    return module.exports.getDbClient().collection('Posts');
  },
  getUsersCollection: function()
  {
    return module.exports.getDbClient().collection('Users');
  },
  postsByUserName: function(username)
  {
    return module.exports.getPostsCollection().find({'username' : username}).toArray();
  },
  postByUserNameAndPostId: function(username, postId)
  {
    return module.exports.getPostsCollection().findOne({'username' : username, 'postid' : postId});
  },
  maxPostId: function()
  {
    return module.exports.getPostsCollection().find().sort({psotid:-1}).limit(1).toArray();
  },
  insertPost: function(post)
  {
    return module.exports.getPostsCollection().insertOne(post);
  }
};
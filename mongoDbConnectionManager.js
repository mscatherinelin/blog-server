
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'test';

var _db;

module.exports = {
  connectToServer: function( callback ) {
    MongoClient.connect( url , function( err, db ) {
      _db = db;
      return callback(err);
    } );
  },
  getDbClient: function() {
    return _db.db('test');
  }
};
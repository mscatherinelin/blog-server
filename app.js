var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

var index = require('./routes/index');
var users = require('./routes/users');
var blog = require('./routes/blog');
var api = require('./routes/api');
var edit = require('./routes/edit');

var login = require('./routes/login');
var mongoDb = require("./mongoDbConnectionManager.js");

var app = express();

// set up mongoDb
mongoDb.connectToServer(function (err) {
  console.log("Got Connection to server")
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/', index);
app.use('/edit', edit);
app.use(express.static(path.join(__dirname, 'edit')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', users);
app.use('/blog', blog);
app.use('/api', api);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

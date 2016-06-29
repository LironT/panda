var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;


//
//Frontend:
//
//  Create a web page that contains a comment feed with the ability to insert new comments and filter the existing comments.
//  Use the attached design as a guideline for your web page.
//  To create the page, use one of the currently popular web application frameworks (such as AngularJS, Backbone.js, React, etc.)
//The web page should include a form with 2 fields - email and message text fields - and a submit button.
//  The submit button should add a new item to the feed below the form.
//  The item that will appear in the feed should contain a gravatar photo (https://en.gravatar.com/) that matches the inserted email, the email and the message.
//The web page should also include a filter area which allows the user to filter the items.
//  Use flexbox to construct the page layout
//
//
//Backend:
//
//  Implement a backend service that stores/retrieves the comments.
//  The service should be implemented in either Node.JS, Java or Scala.
//  Use either MongoDB or Redis as persistence layer.
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sequelizeError = require('sequelize/lib/errors');

// routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// router configuration
app.use('/', indexRouter);
app.use('/users', usersRouter);


// handle error middware
app.use(function handleDBError(error, req, res, next) {
  console.error(error);
  if (error instanceof sequelizeError.UniqueConstraintError) {
    res.status(400).json({ message: error.name + ': ' + error.message });
  } else if (error instanceof sequelizeError.BaseError) {
    res.status(500).json({ message: error.name + ': ' + error.message });
  } else {
    next(error);
  }
});

app.use(function handleDefaultError(error, req, res, next) {
  res.status(500).json({ message: error.name + ': ' + error.message });
  next(error);
});

module.exports = app;

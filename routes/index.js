var config = require('config');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    title: 'Hello',
    host: config.get('database.host'),
    db_name: config.get('database.database'),
  });

  next();
});

module.exports = router;

var express = require('express');
var router = express.Router();
var userService = require('../services/user-services');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async (req, res, next) => {
  res.json(await userService.createUser(req.body));
  next();
});

module.exports = router;

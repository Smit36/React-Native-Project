/* eslint-disable no-undef */
var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var router = express.Router();
var {jwtkey} = require('../keys');
var User = mongoose.model('User');

router.post('/signup', async (req, res) => {
  console.log(req.body);

  var {username, password} = req.body;
  try {
    var user = new User({username, password});
    await user.save();
    var token = jwt.sign({userId: user._id}, jwtkey);
    res.json({token});
  } catch (err) {
    res.json(err.message);
  }
});

router.post('/signin', async (req, res) => {
  var {username, password} = req.body;
  if (!username || !password) {
    return res.status(402).json({error: 'Must write username or password'});
  }
  const user = await User.findOne({username});
  if (!user) {
    return res.status(402).json({error: 'Must write username or password'});
  }
  try {
    await user.comparePassword(password);
    var token = jwt.sign({userId: user._id}, jwtkey);
    res.json({token});
  } catch (err) {
    return res.status(402).json({error: 'Must write username or password'});
  }
});

module.exports = router;

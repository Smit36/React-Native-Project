var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var {jwtkey} = require('../keys');

module.exports = (req, res, next) => {
  const {authorization} = req.headers;
  if (!authorization) {
    return res.status(401).send({error: 'You must be login in.'});
  }
  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, jwtkey, async (err, payload) => {
    if (err) {
      return res.status(401).send({error: 'You must be login in.'});
    }
    const {userId} = payload;
    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};

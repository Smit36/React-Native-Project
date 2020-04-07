/* eslint-disable prettier/prettier */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var {mogoUrl} = require('./keys');
var port = 3033;

require('./models/User');
var requireToken = require('./middleware/requireToken');
var authRoutes = require('./routes/authRoutes');
app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(mogoUrl);
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo');
});
mongoose.connection.on('error', (err) => {
  console.log('Error', err);
});

app.get('/', requireToken, (req, res) => {
  res.json('Username ' + req.user.username);
});

app.listen(port, () => {
  console.log('server running on ' + port);
});

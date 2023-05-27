'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// Link to views folder.
let views = path.join(__dirname, '../');

// Home route.
router.get('/', (req, res) => {
  res.json({ root: 32423 });
});

// Other routes.
router.get('/page1', function(req, res){
  res.json({ root: 'page1' });
});
router.get('/page2', function(req, res){
  res.json({ root: 'page2' });
});


app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda (express/server.js)

module.exports = app;
module.exports.handler = serverless(app);

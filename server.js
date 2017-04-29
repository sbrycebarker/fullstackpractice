var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    config = require('./config.js'),
    cors = require('cors'),
    axios = require('axios'),
    facebook = require('passport-facebook'),
    request = require('request')


    var app = express()


    app.use(bodyParser.json)

  app.get('/users', function(req, res, next) {
      res.send("server stuff")
    });

  app.post('/users', function(req, res, next) {
    res.send("")
  })


  var port = 3000

  app.listen(port, function() {
    console.log("listining on port" + port)
  })

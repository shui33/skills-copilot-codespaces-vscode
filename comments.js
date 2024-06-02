//create web server
var express = require('express');
var app = express();

//create a route
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

//start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});

// Path: index.js
//create web server
var express = require('express');
var app = express();

//create a route
app.get('/', function(req, res) {
  res.send('This is the home page');
});

//start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});

// Path: app.js
//create web server
var express = require('express');
var app = express();

//create a route
app.get('/', function(req, res) {
  res.send('This is the home page');
});

app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

//start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});

// Path: app.js
//create web server
var express = require('express');
var app = express();

//create a route
app.get('/', function(req, res) {
  res.send('This is the home page');
});

app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

app.get('/about', function(req, res) {
  res.send('This is the about page');
});

//start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});

// Path: app.js
//create web server
var express = require('express');
var app = express();

//create a route
app.get('/', function(req, res) {
  res.send('This is the home page');
});

app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

app.get('/about', function(req, res) {
  res.send('This is the about page');
});

app.get('/contact', function(req, res) {
  res.send('This is the contact page');
});

//start the server
app.listen(3000, function() {
  console
//create web server
const express = require('express');
const app = express();
const path = require('path');

//create a route
app.get('/', (req, res) => {
    res.send("Hello World");
});

//create a route
app.get('/api/comments', (req, res) => {
    res.send([1,2,3]);
});

//create a route
app.get('/api/comments/:id', (req, res) => {
    res.send(req.params.id);
});

//create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.params);
});

//create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});
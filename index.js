'use strict';

const express = require('express'),
      app     = express(),
      morgan  = require('morgan');
      
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(process.env.PORT || 8080, process.env.IP, () => {
    console.log('ospex v3 listening');
});

module.exports = app;
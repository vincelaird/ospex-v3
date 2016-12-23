'use strict';

const express    = require('express'),
      app        = express(),
      morgan     = require('morgan'),
      bodyParser = require('body-parser');
      
// required routes
const indexRoutes   = require('./routes/index'),
      matchupRoutes = require('./routes/matchups'),
      profileRoutes = require('./routes/profiles'),
      specRoutes    = require('./routes/specs');
      
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use('/', indexRoutes);
app.use('/m', matchupRoutes);
app.use('/m/:id/s', specRoutes);
app.use('/p', profileRoutes);

app.listen(process.env.PORT || 8080, process.env.IP, () => {
    console.log('ospex v3 listening');
});

module.exports = app;
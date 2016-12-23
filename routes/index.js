const express = require('express'),
      router  = express.Router(),
      path    = require('path');

// root route, will eventually show 'google-news-esque' data for matchups
router.get('/', (req, res) => res.sendFile('index.html'));

// signup route
router.get('/signup', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.post('/signup', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));

// login/logout routes
router.get('/login', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.post('/login', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.get('/logout', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));

module.exports = router;
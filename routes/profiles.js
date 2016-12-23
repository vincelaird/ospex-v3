const express = require('express'),
      router  = express.Router(),
      path    = require('path');

// profile routes
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.get('/new', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.post('/', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.get('/:id', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.get('/:id/edit', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.put('/:id', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.delete('/:id', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));

module.exports = router;
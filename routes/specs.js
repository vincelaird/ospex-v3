const express = require('express'),
      router  = express.Router(),
      path    = require('path');

// spec routes; specs will belong to matchups
router.get('/:specId/new', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.post('/', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.get('/:specId', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.get('/:specId/edit', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.put('/:specId', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));
router.delete('/:specId', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));

module.exports = router;
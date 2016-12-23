const express = require('express'),
      router  = express.Router(),
      path    = require('path');

// matchup routes
router.get('/:id', (req, res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));

module.exports = router;
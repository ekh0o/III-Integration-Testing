const express = require('express');
const router = express.Router();
const hexToRgb = require('../utils/hexToRgb');

router.get('/:hex', (req, res) => {
  try {
    const rgb = hexToRgb(req.params.hex);
    res.json({ rgb });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

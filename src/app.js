const express = require('express');
const app = express();

const hexRoute = require('./routes/hex');

app.use('/api/hex-to-rgb', hexRoute);

module.exports = app;

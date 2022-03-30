const api = require('../js/index.js');
const path = require('path');
const express = require('express');

const PORT = process.env.port || 3001;

const app = express();

// Middleware
app.use('/api', api);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
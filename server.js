const api = require('./routes/index.js');
const path = require('path');
const express = require('express');

const PORT = process.env.port || 3001;

const app = express();

// Middleware
app.use('/api', api);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Get routes
app.get('/', (req, res) => 

res.sendFile(path.join(__dirname, '/public/index.html'))

);

app.get('/notes', (req, res) => 

res.sendFile(path.join(__dirname, '/public/notes.html'))

);

app.get('*', (req, res) =>

res.sendFile(path.join(__dirname, '/public/index.html'))

);

app.listen(PORT, () =>

console.log('App is listening at http://localhost:${PORT}')

);
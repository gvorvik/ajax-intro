const express = require('express');
const app = express();
const PORT = 5000;

const quotes = require('./quotes');

app.get('/', (req, res) => {
    res.send('Happy Wednesday');
});

app.get('/all-quotes', (req, res) => {
    res.send(quotes);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);  
});

//npm init -y automatically agrees to all values of a package.json file
//express cannot send back numbers because those are reserved for statuses (e.g 404)
//to send a number, wrap it in an object
//request/response is 1:1 - one request gets back only one response.
//Always remember to create a start command in the package.json
//When downloading another project, generally we can run npm install and npm start and we're good to go

const express = require('express');
const quotes = require('./quotes');
const randomNumber = require('./random-number');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Happy Wednesday');
    console.log('yeah it worked.');
});

app.get('/all-quotes', (req, res) => {
    res.send(quotes);
});

app.get('/quote', (req, res) => {
    let number = randomNumber(0, 2);
    res.send(quotes[number]);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);  
});

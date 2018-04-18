//AJAX (Asynchronous javascript and xml) is a method for connecting server side javascript with client side javascript

console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery is loaded');

    //the ajax method that fires off a request
    $.ajax({
        //type of request
        type: 'GET',
        //where request is going
        url: '/all-quotes'
    })
        .then(function (response) {
            //this is the promise of a response
            $('#allQuoteDisplay').append(`
            <p>"${response[0].quote}"  - ${response[0].author}</p>
            <p>"${response[1].quote}"  - ${response[1].author}</p>
            <p>"${response[2].quote}"  - ${response[2].author}</p>
            `);
        });

    $('#quoteButton').on('click', getQuote);

}


//function to get random quote
function getQuote() {
    $.ajax({
        type: 'GET',
        url: '/quote'
    })
        .then(function (response) {
            $('#randomQuoteDisplay').append(`<p>"${response.quote}"  - ${response.author}</p>`);
        });
}
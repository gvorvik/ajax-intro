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
    .then(function(response) {
        //this is the promise of a response
        console.log(response);
    });

    $('#quoteButton').on('click', getQuote);

}

function getQuote() {
    $.ajax({
        type: 'GET',
        url: '/quote'
    })
    .then(function(response) {
        $('body').append(`<p>"${response.quote}"  - ${response.author}</p>`);
    });
}
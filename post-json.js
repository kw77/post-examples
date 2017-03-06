// Core 'request' module
var request = require('request');

// Define the object to send
var myObject = { test: 'fieldValue555' };
var postURL  = 'http://localhost:3000/post-json';

// Send it...
request.post({ url:postURL, json:myObject }, function(err,httpResponse,body){
    console.log(body);
});

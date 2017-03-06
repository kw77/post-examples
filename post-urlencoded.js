// Core 'request' module
var request = require('request');

// Define the object to send
var myObject = { test: 'fieldValue111' };
var postURL  = 'http://localhost:3000/url-enc-form';

// Send it...
request.post({ url:postURL, form:myObject }, function(err,httpResponse,body){
    console.log(body);
});

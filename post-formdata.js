// Core 'request' and built-in 'fs' modules
var request = require('request');
var fs      = require('fs');

// Define the form to send
var postURL  = 'http://localhost:3000/multi-part-to-memory';
var formData = {
    value4: 'my_value',
    file4: fs.createReadStream(__dirname + '/test.xml'),
};

// Send it...
request.post({ url:postURL, formData:formData }, function(err,httpResponse,body){
    console.log(body);
});

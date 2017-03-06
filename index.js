// Express Web Framework Core 'Router' Module
var express     = require('express');
var app         = express();

// Express Modules for Serving Static HTML, JS, CSS Files
var serveStatic = require('serve-static');
//  serveFavIcon= require('serve-favicon'); // --> Also useful, but not used here

// Modules for 'Multipart Form Data' Handling Middleware 
var multer      = require('multer');
var multerUpload= multer({ dest: 'uploads/' });  // File upload to disk
var memoryStore = multer.memoryStorage();
var multerMemory= multer({ storage: memoryStore });  // File upload to memory

// Modules for 'URL Encoded Form' and 'JSON' Handling Middleware
var bodyParser  = require('body-parser');
var urlParser   = bodyParser.urlencoded({ extended: false });
var jsonParser  = bodyParser.json();


// Express Routes / Middleware Setup for Static File/Path Handling
app.use('/static', serveStatic(__dirname + '/static'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
});


// Express Routes for URL Endcoded Form Handling
app.post('/url-enc-form', urlParser, function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    res.send('Done');
});


// Express Routes for Multipart Form Handling (without files)
app.post('/multi-part-form', multerUpload.single('myfile'), function (req, res) {
    // .single accepts a single file upload, name given must match the file's form field name
    console.log(JSON.stringify(req.body, null, 2));
    res.send('Done');
});


// Express Routes for Multipart Form Handling (with files -> disk)
app.post('/multi-part-with-file', multerUpload.single('file3'), function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    console.log(JSON.stringify(req.file, null, 2));
    // File stored on disk, req.file.path provides a pointer to this
    res.send('Done');
});


// Express Routes for Multipart Form Handling (with files -> memory)
app.post('/multi-part-to-memory', multerMemory.single('file4'), function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    if(req.file) console.log(req.file.buffer.toString('utf-8')); // Actual file (text) contents
    res.send('Done');
});


// Express Routes for Multipart Form Handling (with files -> memory)
app.post('/post-json', jsonParser, function (req, res) {
//app.post('/post-json', function (req, res) {

    console.log(req.body);

//    console.log(JSON.stringify(req.body, null, 2));
    res.json('Done');
});


// Server Setup
app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});

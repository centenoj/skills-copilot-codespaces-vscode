// Create web server
// Add comments to server
// Send comments to server
// Load comments from server
// Add comments to the DOM
// Load comments from the DOM

// Create web server
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

// Add comments to server
app.use(bodyParser.json());

// Send comments to server
app.post('/data', function(req, res) {
  let comments = JSON.parse(fs.readFileSync('./comments.json'));
  comments.push(req.body);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.send('success');
});

// Load comments from server
app.get('/data', function(req, res) {
  res.send(fs.readFileSync('./comments.json'));
});

// Add comments to the DOM
app.use(express.static('public'));

// Load comments from the DOM
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

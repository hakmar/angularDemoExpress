var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'src')));

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });


app.get('/fruits', function (req, res) {
    res.json([
            { id: 1, name: 'grapes', price: 2.34 },
            { id: 2, name: 'ananas', price: 1.34 },
            { id: 3, name: 'pears', price: 6.34 },
            { id: 4, name: 'oranges', price: 3.34 },
            { id: 5, name: 'apples', price: 7.34 },
            { id: 6, name: 'bananas', price: 7.36 }
    ]);
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

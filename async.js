var http = require('http');
var urls = process.argv.slice(2);

function fetch(url, callback) {
  http.get(url, function(response){
    response.setEncoding('utf8');
    var tmp = '';
    response.on('data', function(data){
        tmp += data;
    });
    response.on('end', function(data){
      callback(tmp);
    });
  });
}

var count = 0;
var results = Array(urls.length);
urls.forEach(function(url, idx) {
  fetch(url, function(data) {
    results[idx] = data;
    count += 1;
    if (count === urls.length) {
      results.forEach(function(item) {
        console.log(item);
      });
    }
  });
});

var http = require("http")

var urls = process.argv.slice(2);
var results = [undefined, undefined, undefined];

urls.forEach(function(url, index){
  http.get(url, function (response) {
      response.setEncoding("utf8");
      var result = '';
      response.on("data", function (data) {
        result += data;
      });
      response.on("end", function (data) {
          results[index] = result;
          processResults(results);
      })
  })
});

function processResults (results){
  var countEmpty = results.reduce(function(previous, current){
    if(current != undefined) {
      return previous;
    } else {
      return previous + 1;
    }
  },0);

  if(countEmpty == 0) {
    results.forEach(function(value){
      console.log(value);
    });
  }
}

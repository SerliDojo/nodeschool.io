var fs = require('fs')

var callback = function (err, data) { 

  var str = data.toString();
  var splitText = str.split('\n');
  console.log(splitText.length-1);

}

fs.readFile(process.argv[2], callback);

var fs = require('fs');
var path = require('path');


var callback = function (err, data) {

  data.filter(function(file){
    return path.extname(file) === '.' + extension;
  }).forEach(function(file){
    console.log(file);
  });

}

fs.readdir(process.argv[2], callback);


var extension = process.argv[3];

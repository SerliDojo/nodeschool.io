var fs = require('fs');
var path = require('path');

module.exports = function list( directory , extension , callback){
  fs.readdir(directory, function (err, data) {
    if (err)
       return callback(err)

    var filteredData =  data.filter(function(file){
      return path.extname(file) === '.' + extension;
    });
    callback(null,filteredData);
  });
}

var fs = require('fs');
var path = require('path');

module.exports = function (dirName, extension, callback) {
  var buffer = fs.readdir(dirName,
    function (err, list) {
      if(err) {
       return callback(err);
     }
      var filteredFiles = [];
      for (i in list) {
        if (path.extname(list[i]) == '.'+extension){
          filteredFiles.push(list[i]);
        }
      }
      return callback(null, filteredFiles);


  } )

}

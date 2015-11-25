var mymodule = require('./monModule.js')

mymodule(process.argv[2], process.argv[3], function(err, list){
  if(err) {
    console.log(err);
  }
  list.forEach(function(value){
    console.log(value);
  });
});

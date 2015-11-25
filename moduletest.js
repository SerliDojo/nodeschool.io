var mymodule = require('./module.js')
mymodule(process.argv[2],process.argv[3],function(error,data){
data.forEach( function (input){
  console.log(input)
})
})

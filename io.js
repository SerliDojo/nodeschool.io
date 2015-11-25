 var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var splitText = str.split('\n');
console.log(splitText.length-1);

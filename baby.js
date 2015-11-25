var result = 0;
var params = process.argv.slice(2);
for (var i = 0; i < params.length; i++) {
  result+=parseInt(params[i]);
}
console.log(result);

var http = require('http')
var fs = require('fs');

var filename = process.argv[3]
var server = http.createServer(function (req, res) {
  fs.createReadStream(filename).pipe(res)
})
server.listen(process.argv[2])

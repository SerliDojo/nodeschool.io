var url = require('url')
var http = require('http')
var fs = require('fs');


var server = http.createServer(function (req, res) {
  var parseResult = url.parse(req.url, true)
  var iso = parseResult.query.iso;
  var pathName = parseResult.pathname;
  res.writeHead(200, { 'Content-Type': 'application/json' });

  var date = new Date(iso);
  var result = {};
  if(pathName == '/api/parsetime') {
    result.hour = date.getHours();
    result.minute = date.getMinutes();
    result.second = date.getSeconds();
  } else if(pathName == '/api/unixtime') {
    result.unixtime = date.getTime();
  }

  res.end(JSON.stringify(result));
})
server.listen(process.argv[2])

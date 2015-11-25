var http = require('http')
var url = require('url')
var server = http.createServer(function (req, res) {
  var urlObject = url.parse(req.url, true)
  if(urlObject.pathname === '/api/parsetime'){
    var date=urlObject.query.iso || '2013-08-10T12:10:15.474Z'
    var dateFormattee = new Date(date)
    var json = {
      hour : dateFormattee.getHours(),
      minute : dateFormattee.getMinutes(),
      second : dateFormattee.getSeconds(),
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(json))
  }
  if(urlObject.pathname === '/api/unixtime'){
    var date=urlObject.query.iso || '2013-08-10T12:10:15.474Z'
    var dateFormattee = new Date(date)
    var json = {
      unixtime : dateFormattee.getTime()
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(json))
  }



})

server.listen(process.argv[2])

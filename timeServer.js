var net = require('net')
var strftime = require('strftime')
var server = net.createServer(function (socket) {
       var date = new Date();
       socket.end(strftime('%F %R',date)+'\n');
})
server.listen(process.argv[2])

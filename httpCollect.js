var http = require('http');
http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  var tmp = '';
  response.on('data', function(data){
      tmp += data;
  });

  response.on('end', function(data){
    console.log(tmp.length);
    console.log(tmp);
  });
});

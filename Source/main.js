const http=require('http');

http.createServer(function(req,res){

    res.write("Hello I am from server");
    res.end();


}).listen(8080)
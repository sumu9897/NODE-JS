const http=require('http');

http.createServer(function(req,res){

    //Basic
    res.writeHead(201,{'Content-Type':'application/json'})
    let person={name:"ABC",age:24}
    res.write("Hello I am from server");
    res.end();


}).listen(8080,function(){
    console.log("Server Running...")
})
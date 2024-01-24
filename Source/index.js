//Working With URL Module

// const url=require('url') //ES5

// const myURL='http://localhost:8080/api/v1/product/delete?userID=1&productID=2'   //  Base+Path+Query
// const u= url.parse(myURL,true);


// console.log(u.host);
// console.log(u.pathname);
// console.log(u.search);






// Read File

const http = require('http');
const fs = require("fs");

http.createServer(function(req,res){
    fs.readFile('demo.text', function(error,data){
        res.write(data);
        res.end();
    })
}).listen(4040,function(){
    console.log("Listening on port 4040");
})
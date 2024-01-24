//Working With URL Module

// const url=require('url') //ES5

// const myURL='http://localhost:8080/api/v1/product/delete?userID=1&productID=2'   //  Base+Path+Query
// const u= url.parse(myURL,true);


// console.log(u.host);
// console.log(u.pathname);
// console.log(u.search);






// Read File


/*
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

*/


//Crate File

/*
const http = require('http');
const fs = require("fs");

http.createServer(function(req,res){
    fs.writeFile('demo1.text','This is 2nd Demo File',function(err){
        if(err){
            res.end("File Writing Fail");
        }else{
            res.end("File Written Successfully!");
        }

    })
}).listen(4041,function(){
    console.log("Listening on port 4041");
})

*/

//Update File

/*
const http = require('http');
const fs = require("fs");

http.createServer(function(req,res){
    fs.appendFile('demo1.text','Hello',function(err){
        if(err){
            res.end("File Update Fail");
        }else{
            res.end("File Update Successfully!");
        }

    })
}).listen(4042,function(){
    console.log("Listening on port 4042");
})
*/


//Delete File


const http = require('http');
const fs = require("fs");

http.createServer(function(req,res){
    fs.unlink('demo1.text',function(err){
        if(err){
            res.end("File Delete Fail");
        }else{
            res.end("File Delete Successfully!");
        }

    })
}).listen(4042,function(){
    console.log("Listening on port 4042");
})

//Working With URL Module

const url=require('url') //ES5

const myURL='http://localhost:8080/api/v1/product/delete?userID=1&productID=2'   //  Base+Path+Query
const u= url.parse(myURL,true);


console.log(u.host);
console.log(u.pathname);
console.log(u.search);
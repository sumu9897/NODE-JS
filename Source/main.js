const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Hello World!")
});

server.listen(5050, () => {

});
console.log('Server is listening on port 5050');

var http = require('http');

for (let i = 1; i < 5; i++) {
    http.createServer(function (req, res) {
        res.write(`Hello from Server ${i}`);
        res.end();
    }).listen('303' + i);
}
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(__dirname + "/home.html", "utf-8").pipe(res);
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(__dirname + "/about.html", "utf-8").pipe(res);
    } else if (req.url === "/api/products") {
        const products = [ {name: "apple", price: 20}, {name: "orange", price: 25} ];
        res.writeHead(200, { "Content-Type": "application/json"});
        res.end(JSON.stringify(products));
    } else {
        res.writeHead(404, { "Content-Type" : "text/html"});
        fs.createReadStream(__dirname + "/404.html", "utf-8").pipe(res);
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running at port 3000");
});
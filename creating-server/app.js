const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request made at " + req.url);
    res.writeHead(200, { "Content-Type" : "text/plain" });
    res.end("Hello node.");
});

server.listen(3000, "127.0.0.1", () => {
    console.log("listening at port 3000");
})
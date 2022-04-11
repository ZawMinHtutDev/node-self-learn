const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type" : "text/plain" });
    const readStream = fs.createReadStream(__dirname + "/src/readMe.txt", "utf-8");
    readStream.pipe(res);
});

server.listen(3000, "127.0.0.1",() => {
    console.log("Server running at port 3000");
})
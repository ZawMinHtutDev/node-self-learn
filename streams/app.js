const fs = require('fs');

const readStream = fs.createReadStream(__dirname + "/src/readMe.txt", "utf-8");
const writeStream = fs.createWriteStream(__dirname + "/dist/writeMe.txt");

readStream.on("data", chunk => {
    console.log("new chunk received.");
    writeStream.write(chunk);
});
let fs = require("fs");

fs.mkdir("./dist", (err) => {
    if(err) {
        console.log(err);
        return;
    }

    fs.readFile("./src/readMe.txt", "utf-8", (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        const sometingToWrite = "\nSomething that was written for extra."
        const writeText = data.concat(sometingToWrite);
        fs.writeFile("./dist/writeMe.txt", writeText, (err) => {
            if(err) {
                console.log(err);
                return;
            }
        });
    });
})

// to delete the the directory and the files inside it.
// fs.unlink("./dist/writeMe.txt", (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     fs.rmdir("./dist", (err) => {
//         if(err) {
//             console.log(err)
//         }
//     });
// });
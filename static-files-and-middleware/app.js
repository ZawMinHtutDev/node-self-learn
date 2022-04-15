const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
    res.render("home", { pathName : req.path });
});

app.get("/about", (req, res) => {
    res.render("about", { pathName : req.path });
});

app.get("/contact", (req, res) => {
    res.render("contact", { pathName : req.path });
});

app.listen(3000, () => {
    console.log("Listening at port 3000");
});
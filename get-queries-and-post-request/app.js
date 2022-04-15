const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const urlEncoded = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/products", (req, res) => {
    res.render("products", { qs: req.query });
});

app.post("/products", urlEncoded, (req, res) => {
    res.render("products-success", { data: req.body });
});

app.listen(3000, () => {
    console.log("App is running at port 3000");
});
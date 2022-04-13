const app = require("express")();

app.get("/", (req, res) => {
    res.send("This is home page");
});

app.get("/profile/:name", (req, res) => {
    res.send("You have requested for the profile in the name of " + req.params.name);
});

app.listen(3000, () => {
    console.log("App is listening at port 3000");
})
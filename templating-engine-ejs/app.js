const app = require("express")();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/categories/:categoryName", (req, res) => {
    const dummyCategories = [
        {
            cateGoryName: "fruits",
            products: ["apples", "oranges", "grapes", "pineapples", "avocados"],
        },
        {
            cateGoryName: "meat",
            products: ["chicken thigh", "chicken wing", "pork belly", "beef"],
        },
    ];
    const data = dummyCategories.filter(ctgr => ctgr.cateGoryName === req.params.categoryName)[0];

    res.render("category", data);
});

app.listen(3000, () => {
    console.log("The app is running at localhost:3000");
});

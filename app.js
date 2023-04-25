const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// set routes
app.get("/", (req, res) => {
    res.render("index");
});

// listen on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1><p>+8801920...</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1><p>Hi, I'm a SE. Live in BD.</p>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});
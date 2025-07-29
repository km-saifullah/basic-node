import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.end("<h1>ABout Page</h1>");
});

app.listen(8000, () => console.log("Server is running"));

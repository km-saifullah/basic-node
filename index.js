import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("<h1>Hello World</h1>");
});

app.get("/test", (req, res) => {
  res.end("<h1>Hello universe</h1>");
});

app.listen(8000, () => console.log("Server is running"));

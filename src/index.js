import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("<h1>API WORKS KEVINCODIGO 2</h1>");
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING IN PORT ${PORT}`);
});

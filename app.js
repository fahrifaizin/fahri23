const express = require("express");
const app = express();
const host = "localhost"; // alamat server
const port = 3001; // alamat port

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

app.get('/product/:id', (req,res)=>{
  res.send('product id : '+ req.params.id +' kategori id : '+ req.query.idCat)
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Not Found</h1>");
});

// Run server
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
const express = require("express");
const app = express();
const contacts = require("./contacts.json");

// alamat host dan port
const host = "localhost"; // alamat host
const port = 3001; // alamat port

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { namaWeb: "Welcome To The World", title: "Welcome To the World" });
});

// permintaan GET ke about
app.get("/about", (req, res) => {
  res.render("about", { title: "Welcome To The world - About" });
});

// permintaan GET contact
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Welcome To the world - Contact",
    contact: contacts,
  });
});

// menangani permintaan yang tidak sesuai 
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Not Found</h1>");
});

// Menjalankan server Express pada host dan port yang ditentukan
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
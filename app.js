const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const { addContact, fetchContact, searchContact,  } = require("./utility/contacts.js");
const host = "localhost";
const port = 3001;

app.set("view engine", "ejs");

app.use(expressLayouts);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", {
    nama_Web: "Welcome To The World",
    title: "Welcome To The World",
    layout: "layout/core-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Welcome To The World - About",
    layout: "layout/core-layout",
    imageSrc: "img/selfie.jpeg"
  });
});

app.get("/contact", (req, res) => {
  const contacts = fetchContact();
  
  if (contacts.length === 0) {
    res.render("contact", {
      title: "Welcome To The World - Contact",
      contacts,
      isEmpty: true,
      layout: "layout/core-layout.ejs",
    });
  } else {
    res.render("contact", {
      title: "Welcome To The World - Contact",
      contacts,
      isEmpty: false,
      layout: "layout/core-layout.ejs",
    });
  }
});

app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Welcome To The World - Add Contact",
    layout: "layout/core-layout.ejs",
  });
});

app.post("/contact", (req, res) => {
  addContact(req.body);
  res.redirect("/contact");
});

app.get("/contact/:nama", (req, res) => {
  const contact = searchContact(req.params.nama);
  res.render("detail", {
    title: "Welcome To The World - Detail Contact",
    contact,
    isEmpty: true,
    layout: "layout/core-layout.ejs",
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Not Found</h1>");
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
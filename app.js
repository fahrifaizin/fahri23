const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const { fetchContact } = require("./utility/contacts.js");

// alamat host dan port
const host = "localhost"; // alamat host
const port = 3001; // alamat port

// Menyajikan file gambar dari direktori "public"
app.use(express.static('public'));

// Mengatur view engine menggunakan EJS
app.set("view engine", "ejs");

// Menggunakan modul express-ejs-layouts
app.use(expressLayouts);

// // application level middleware
// app.use((req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// });


app.get("/", (req, res) => {
  res.render("index", {
    nama_Web: "Welcome To The World",
    title: "Welcome To The World",
    layout: "layout/core-layout",
  });
});

// Handle permintaan GET ke about
app.get("/about", (req, res) => {
  res.render("about", { 
     nama_Web: "Welcome To The World",
    title: "Welcome To The World",
    layout: "layout/core-layout",
    imageSrc: "img/selfie.jpeg"
   });
});

// permintaan GET contact dan mengirimkan file contact.html
app.get("/contact", (req, res) => {
   const contacts = fetchContact();
  // data contact static
   //const contacts = [
  //{ "nama": "Moh Fahri Faizin", "email": "fahri@gmail.com" },
  //{ "nama": "Giovani Batara", "email": "giovani@gmail.com" },
  //{ "nama": "Andre", "email": "andre01@gmail.com" },
  //{ "nama": "Alex", "email": "alex@gmail.com" },
  //{ "nama": "Kafka", "email": "kafka@gmail.com" },
  //{ "nama": "Fayadh", "email": "fayadh@gmail.com" }
  //];

  if (contacts.length === 0) {
    // Menampilkan Tidak Tersedia
    res.render("contact", {
      nama_Web: "Welcome To The World",
      layout: "layout/core-layout",
      title: "Welcome To The World - Contact",
      contacts,
      isEmpty: true, // Variabel untuk menunjukan bahwa tidak tersedia
    });
  } else {
    res.render("contact", {
      nama_Web: "Welcome To The World",
      layout: "layout/core-layout",
      title: "Welcome To The World - Contact",
      contacts,
      isEmpty: false, // Vaiabel untuk menunjukan bahwa tidak tersedia
    });
  }
});

// menangani permintaan ke get halaman 
app.get("/product/:id", (req, res) => {
  res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
});

// Middleware untuk menangani permintaan yang tidak sesuai 
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Not Found</h1>");
});

// Menjalankan server Express pada host dan port yang ditentukan
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
})
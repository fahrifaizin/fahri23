const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

// alamat host dan port
const host = "localhost"; // alamat host
const port = 3001; // alamat port

// Menyajikan file gambar dari direktori "public"
app.use(express.static('public'));

// Mengatur view engine menggunakan EJS
app.set("view engine", "ejs");

// Menggunakan modul express-ejs-layouts
app.use(expressLayouts);

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
  const contacts = [
   { nama: "Moh Fahri Faizin", mobile: "081389976935" },
   { nama: "Giovani Batara", mobile: "081233332222" },
   { nama: "Andre Alpian", mobile: "081344445555" },
   { nama: "Alex", mobile: "081266667777" },
   { nama: "Kafka Adib Al Malihi", mobile: "081322228888" },
   { nama: "Fayadh", mobile: "081266668888" },
];
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
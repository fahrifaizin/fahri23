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
      title: "Welcome To The World - Contact",
      contacts,
      isEmpty: true, // Variabel untuk menunjukan bahwa tidak tersedia
    });
  } else {
    res.render("contact", {
      title: "Welcome To The World - Contact",
      contacts,
      isEmpty: false, // Vaiabel untuk menunjukan bahwa tidak tersedia
    });
  }
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
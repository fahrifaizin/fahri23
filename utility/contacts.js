const fs = require("fs");

// Membuat folder tidak ada
const lokasiDirr = "./data";
if (!fs.existsSync(lokasiDirr)) {
  fs.mkdirSync(lokasiDirr);
}

//membuat file contacts tidak ada
const filePath = `./data/contacts.json`;
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

//loading contacts
const fetchContact = () => {
  //Membaca file JSON
  const file = fs.readFileSync(filePath, "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

module.exports = { fetchContact };
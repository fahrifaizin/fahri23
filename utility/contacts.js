var fs = require('fs');
const lokasiDirr = "./data";
if (!fs.existsSync(lokasiDirr)) {
  fs.mkdirSync(lokasiDirr);
}

const filePath = `./data/contacts.json`;
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

const fetchContact = () => {
  const file = fs.readFileSync(filePath, "utf8");
  const contacts = JSON.parse(file);
  return contacts;
};

const searchContact = (nama) => {
  const contacts = fetchContact();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  return contact;
};

module.exports = { fetchContact, searchContact };
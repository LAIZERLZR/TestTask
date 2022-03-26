const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: String,
  img: String,
  mail: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

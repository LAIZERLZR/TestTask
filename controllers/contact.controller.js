const Contact = require("../models/contact.model");

module.exports.contactController = {
  createContact: async (req, res) => {
    try {
      const createContact = await Contact.create({
        name: req.body.name,
        img: req.body.img,
        mail: req.body.mail,
      });
      res.json(createContact);
    } catch (error) {
      res.json(error);
    }
  },
  getContact: async (req, res) => {
    try {
      const getContact = await Contact.find();
      res.json(getContact);
    } catch (error) {
      res.json(error);
    }
  },
};

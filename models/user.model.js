const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: {
    type: String,
    requied: true,
  },
  password: {
    type: String,
    requied: true,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const LinkSchema = new mongoose.Schema({
  linkName: {
    type: String,
    default: ""
  },
  product: {
    type: String,
    default: ""
  },
  promotions: {
    type: String,
    default: ""
  },
  notes: {
    type: String,
    default: ""
  },
  defaultUrl: {
    type: String,
    default: ""
  },
  utmParameters: {
    type: String,
    default: ""
  }
});

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  links: [LinkSchema],
  isDeleted: {
    type: Boolean,
    default: false
  }
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);

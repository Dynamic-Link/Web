const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
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

module.exports = mongoose.model("Link", LinkSchema);

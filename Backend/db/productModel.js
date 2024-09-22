const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {type: String},
  price: {type: String},
  file_name: { type: String },
  description: { type: String, default: "" },
  type_product: {type: String},
  name: { type: String, default: "" },
});

module.exports = mongoose.model.Product || mongoose.model("Product", productSchema);

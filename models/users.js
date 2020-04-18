const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAcctsSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  Firstname: { type: String, required: false },
  Lastname: { type: String, required: false },
  Email: { type: String, required: false},
  Age: { type: String, required: false},
  imageUrl: { type: String, required: false},
});

const UserAccts = mongoose.model("UserAccts", userAcctsSchema);

module.exports = UserAccts;
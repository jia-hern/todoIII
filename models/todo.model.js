const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Todo = new Schema({
  todo_text: String,
});

module.exports = mongoose.model("Todo", Todo);

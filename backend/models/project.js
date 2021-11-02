"use strict";

let moongose = require("mongoose");
let Schema = moongose.Schema;

let ProjectSchema = Schema({
  name: String,
  description: String,
  category: String,
  year: Number,
  langs: String,
  image: String,
});

module.exports = moongose.model("Project", ProjectSchema);

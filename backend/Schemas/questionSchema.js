const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // "Categorize", "Cloze", "Comprehension"
  content: { type: Object, required: true },
  imageUrl: { type: String },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;

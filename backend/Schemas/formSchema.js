const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  headerImage: { type: String },
  questions: [ { type: mongoose.Schema.Types.ObjectId, ref: "Question" } ],
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;

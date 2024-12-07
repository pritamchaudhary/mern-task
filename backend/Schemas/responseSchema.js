const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
  answers: { type: Array, required: true },
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log("DB Connection Error:", error));

// Mongoose Schema
const formSchema = new mongoose.Schema({
  title: String,
  headerImage: String,
  questions: Array,
});

const Form = mongoose.model("Form", formSchema);

// API Route
app.post("/api/forms", async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json({ message: "Form saved successfully!", form });
  } catch (error) {
    res.status(500).json({ message: "Error saving form", error });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

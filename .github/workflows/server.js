const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/logisticsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

// Schema and Model
const packageSchema = new mongoose.Schema({
  trackingNumber: String,
  status: String,
  updatedAt: Date,
});

const Package = mongoose.model("Package", packageSchema);

// API Endpoints

// Get package status by tracking number
app.get("/track/:trackingNumber", async (req, res) => {
  const { trackingNumber } = req.params;

  try {
    const packageData = await Package.findOne({ trackingNumber });

    if (packageData) {
      res.json({
        status: "success",
        data: packageData,
      });
    } else {
      res.status(404).json({ status: "error", message: "Package not found" });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
})
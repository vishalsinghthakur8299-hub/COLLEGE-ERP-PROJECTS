const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vishalsingh:vishal7545@cluster0.n0pbz9e.mongodb.net/?appName=Cluster0"
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
    console.log("connect db");
  }
};

module.exports = connectDB;



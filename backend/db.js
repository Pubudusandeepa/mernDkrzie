require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  const connection = async () => {
    try {
      await mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost:27017/MERN"
      );
      console.log("mongodb is connected");
    } catch (error) {
      console.log("mongodb is not connected");
    }
  };
};

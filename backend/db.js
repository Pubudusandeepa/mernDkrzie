require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  const connection = mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/MERN")
    .then((result) => console.log("Connected to database"))
    .catch((err) => console.log(err.message, "could not connect to database"));
};

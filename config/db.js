// for MongoDB purposes
const mongoose = require("mongoose");
// Config
const config = require("config");
// getting the mongoDB connection URI
const db =
  "mongodb+srv://dentistupb:dentistupb@cluster0.jaaoirf.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("MongoDB Connected...");
  } catch (e) {
    console.error(e.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

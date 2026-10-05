const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `✅ Database connected — using "${conn.connection.name}" on Atlas`,
    );
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // no database means no working app, so stop instead of running half-broken
  }
};

module.exports = connectDB;

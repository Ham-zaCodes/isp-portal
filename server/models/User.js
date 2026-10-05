const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "employee", "owner"],
      default: "customer",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    resetToken: String,
    resetTokenExpiry: Date,
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt — matches your ER diagram's createdAt field
  },
);

module.exports = mongoose.model("User", userSchema);

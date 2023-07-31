const mongoose = require("mongoose");

const logSchema = new mongoose.Schema(
  {
    logLevel: {
      type: String,
      enum: ["E", "F"], // Only allows values "E" (Error) or "F" (Fatal)
      required: true,
    },
    component: {
      type: String,
      required: true,
    },
    logMessage: {
      type: String,
      required: true,
    },
    event: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      default: "Still not found",
    },
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);

module.exports = Log;

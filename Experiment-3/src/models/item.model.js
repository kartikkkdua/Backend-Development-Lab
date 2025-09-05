const { Schema, model } = require("mongoose");

const ItemSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true, 
  }
);

module.exports = model("Item", ItemSchema);

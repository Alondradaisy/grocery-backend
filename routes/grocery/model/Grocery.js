const mongoose = require("mongoose");

const GrocerySchema = new mongoose.Schema({
  grocery: {
    type: String,
  },
  purchased: {
    type: Boolean,
  },
  dateAdded: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("grocery", GrocerySchema);

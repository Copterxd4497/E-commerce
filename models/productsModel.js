const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchma = new Schema({
  name: {
    type: String,
    required: [true, "The product must have a name."],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "The product must have a price tag"],
  },
  // only icon
  icon: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        // Only allow a single Unicode emoji (no multiple emojis or text)
        // This regex matches a single emoji character
        return /^\p{Emoji}$/u.test(v);
      },
      message: (props) => `${props.value} is not a valid single emoji!`,
    },
  },
  description: {
    type: String,
    trim: true,
  },
});

const Products = mongoose.model("Products", productSchma);
module.exports = Products;

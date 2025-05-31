const mongoose = require("mongoose");
const Schema = mongoose;

const techProductModel = new Schema.Schema({
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
    title: {
        type: String,
        required: [true, "The product must have title."],
        trim: true,
    },
    price: {
        type: Number,
      required: [true, "The price must have a price."],
      set: value => Number(value),
    },
    description: {
        type: String,
    }
})

const TechProducts = mongoose.model('TechProduct', techProductModel);
module.exports = TechProducts;
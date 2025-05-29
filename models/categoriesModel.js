const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "categories must have a name"]
  },
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
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
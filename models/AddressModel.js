const mongoose = require("mongoose")
const { Schema } = mongoose;

const addressSchema = new Schema({
    lable: {
        type: String,
        required: [true, "Address must have label for itself"],
        trim: true,
    },
    street: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        required: [true, "The address must have city"],
        trim: true,
    },
    state: {
        type: String,
        required: [true, "The address must have state or convince."],
        trim: true,
        set: v => v ? v.toUpperCase() : v
    },
    zip: {
        type: String,
        trim: true,
    }
})

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
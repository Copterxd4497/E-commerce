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
    
})


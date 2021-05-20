const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const positionScheme = new Schema({
    name: {
        type: String,
    },
    X: {
        type: Number,
    },
    Y: {
        type: Number,
    },
    Z: {
        type: Number,
    }
})

module.exports = mongoose.model("Position", positionScheme);
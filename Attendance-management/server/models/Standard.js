const mongoose = require('mongoose');

const StandardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const Standard = mongoose.model("Standard", StandardSchema)
module.exports = Standard;
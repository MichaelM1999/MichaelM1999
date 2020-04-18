const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    goalName: {type: String, required: true},
    Units: {type: String, required: true},
    Quantity: {type: String, required: true},
    Current: {type: String, required: true},
    User: {type: String, required: true}
});

const Goal = mongoose.model("User", goalSchema);

module.exports = Goal;
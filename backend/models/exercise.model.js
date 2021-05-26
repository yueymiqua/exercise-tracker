const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
  username: { type: String, require: true },
  password: { type: String, require: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamp: true,
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
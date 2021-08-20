const { Schema, model } = require('mongoose');

// Schema

const projectionSchema = new Schema({
  sendAmt: { type: Number, required: true },
  savedAmt: { type: Number, required: true },
  years: { type: Number, required: true }
}, {
  timestamps: true
})

module.exports = model("Projection", projectionSchema)

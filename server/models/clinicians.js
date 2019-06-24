const mongoose = require('mongoose');

const cliniciansSchema = new mongoose.Schema({
  LastName: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  ID:{
    type: Number,
    required: true,
    index: true,
  },
  Email: {
    type: String,
  },
  Locations: {
    type: [String],
    default: [],
    required: true,
  },
  Services: {
    type: [String],
    default: [],
    required: true,
  },
  Treatments: {
    type: [String],
    default: [],
    required: true,
  },
  Programs: {
    type: [String],
    default: [],
    required: true,
  },
}, { collection: 'Clinicians' });

const clinicians = mongoose.model('clinicians', cliniciansSchema);

module.exports = clinicians;

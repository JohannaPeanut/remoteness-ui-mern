const mongoose = require('mongoose');

const landscapeSchema = new mongoose.Schema(
  {
    isUsed: {
      type: Boolean,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    isGallery: {
      type: Boolean
    }
  },
  { timestamps: true }
);

const Landscape = mongoose.model('Landscape', landscapeSchema);

module.exports = Landscape;

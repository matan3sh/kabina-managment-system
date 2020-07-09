const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  engName: {
    type: String,
    required: true
  },
  hebName: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  credit: {
    type: String,
    default: 'N/A'
  },
  kdm: {
    type: String,
    default: 'N/A'
  },
  desc: {
    type: String,
    required: true
  },
  halls: [
    {
      hall: {
        type: String
      },
      at: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('movie', MovieSchema);

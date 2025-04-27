const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    tmdbId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    release_date: { type: String },
    poster_path: { type: String },
    genres: [{ name: String }],
    director: { type: String },
    overview: { type: String },
  });

  module.export  = mongoose.model('Movie', movieSchema);
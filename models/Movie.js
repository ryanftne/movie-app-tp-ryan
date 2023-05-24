const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  actors: [String],
  director: String,
  image: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

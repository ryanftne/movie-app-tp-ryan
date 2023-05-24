const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const moviesRouter = require('./routes/movies');

app.use(cors()); // Utiliser cors en premier

mongoose.connect('mongodb+srv://rfontaine:AWPawp789@cluster0.dl8bxj6.mongodb.net/sample_mflix?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/movies', moviesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

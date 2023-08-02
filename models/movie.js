const mongoose = require('mongoose');
const { isURL } = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, 'Поле не должно быть пустым'],
    },
    director: {
      type: String,
      required: [true, 'Поле не должно быть пустым'],
    },
    duration: {
      type: Number,
      required: [true, 'Поле не должно быть пустым'],
    },
    year: {
      type: String,
      required: [true, 'Поле не должно быть пустым'],
    },
    description: {
      type: String,
      required: [true, 'Поле не должно быть пустым'],
    },
    image: {
      type: String,
      required: [true, 'Поле не должно быть пустым'],
      validate: {
        validator: (v) => isURL(v),
        message: 'Некорректный URL',
      },
    },
    trailerLink: {
      type: String,
      required: [true, 'Поле не должно быть пустым'],
      validate: {
        validator: (v) => isURL(v),
        message: 'Некорректный URL',
      },
    },
    thumbnail: {
      type: String,
      required: [true, 'Поле не должно быть пустым'],
      validate: {
        validator: (v) => isURL(v),
        message: 'Некорректный URL',
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'Поле не должно быть пустым'],
    },
    movieId: {
      type: Number,
      required: [true, 'Поле не должно быть пустым'],
    },
    nameRU: {
      type: String,
      required: [true, 'Поле не должно быть пустым'],
    },
    nameEN: {
      type: String,
      required: [true, 'Поле не должно быть пустым'],
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('movie', movieSchema);

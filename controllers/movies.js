const Movie = require('../models/movie');
const {
  InvalidDataError,
  NotFoundError,
  ForbiddenError,
} = require('../errors/errors');
const { errorMessages, resultMessages } = require('../utils/constants');

const { filmNotFoundByIdMsg } = errorMessages;
const { filmIsDeleteMsg } = resultMessages;

const findUserMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch((err) => next(err));
};

const addMovie = (req, res, next) => {
  Movie.create({ ...req.body, owner: req.user._id })
    .then((movies) => res.status(201).send(movies))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new InvalidDataError());
      } else {
        next(err);
      }
    });
};

const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    if (movie) {
      if (String(movie.owner) === req.user._id) {
        Movie.deleteOne({ _id: req.params.movieId })
          .then(() => res.send(filmIsDeleteMsg))
          .catch(next);
      } else {
        next(new ForbiddenError());
      }
    } else {
      next(new NotFoundError(filmNotFoundByIdMsg));
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addMovie,
  findUserMovies,
  deleteMovie,
};

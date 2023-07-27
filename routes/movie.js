const router = require('express').Router();

const {
  findUserMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  addFilmValidation,
  checkMovieId,
} = require('../middlewares/celebrateValidation');

router.get('/', findUserMovies);
router.post('/', addFilmValidation, addMovie);
router.delete('/:movieId', checkMovieId, deleteMovie);

module.exports = router;

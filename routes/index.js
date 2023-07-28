const router = require('express').Router();

const userRoutes = require('./user');
const movieRoutes = require('./movie');
const { createUser, login } = require('../controllers/users');
const { NotFoundError } = require('../errors/errors');
const {
  userRegistrationValidation,
  userAuthorizationValidation,
} = require('../middlewares/celebrateValidation');
const auth = require('../middlewares/auth');
const {
  unknownMethodOrUrlErrorMessage,
  exitMessage,
} = require('../utils/constants');

router.post('/signup', userRegistrationValidation, createUser);
router.post('/signin', userAuthorizationValidation, login);
router.use(auth);
router.get('/signout', (req, res) => {
  res.clearCookie('jwt').send(exitMessage);
});
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/*', (req, res, next) => {
  next(new NotFoundError(unknownMethodOrUrlErrorMessage));
});

module.exports = router;

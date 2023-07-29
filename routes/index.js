const router = require('express').Router();

const userRoutes = require('./user');
const movieRoutes = require('./movie');
const { createUser, login } = require('../controllers/users');
const { NotFoundError } = require('../errors/errors');
const { errorMessages, resultMessages } = require('../utils/constants');
const {
  userRegistrationValidation,
  userAuthorizationValidation,
} = require('../middlewares/celebrateValidation');
const auth = require('../middlewares/auth');

const { unknownMethodOrUrlMsg } = errorMessages;
const { exitMsg } = resultMessages;

router.post('/signup', userRegistrationValidation, createUser);
router.post('/signin', userAuthorizationValidation, login);
router.use(auth);
router.get('/signout', (req, res) => {
  res.clearCookie('jwt').send(exitMsg);
});
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/*', (req, res, next) => {
  next(new NotFoundError(unknownMethodOrUrlMsg));
});

module.exports = router;

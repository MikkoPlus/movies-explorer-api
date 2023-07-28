const bcrypt = require('bcryptjs');
const jsonWebToken = require('jsonwebtoken');

const User = require('../models/users');
const {
  InvalidDataError,
  EmailIsExistsError,
  UnauthorizedError,
  NotFoundError,
} = require('../errors/errors');

const { userNotFoundByIdMessage } = require('../utils/constants');

const createUser = (req, res, next) => {
  bcrypt
    .hash(String(req.body.password), 10)
    .then((hashedPassword) => {
      User.create({ ...req.body, password: hashedPassword })
        .then((user) => {
          res.status(201).send(user);
        })
        .catch((err) => {
          if (err.name === 'ValidationError') {
            next(new InvalidDataError());
          } else if (err.code === 11000) {
            next(new EmailIsExistsError());
          } else {
            next(err);
          }
        });
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findOne({ email })
    .orFail((err) => next(err))
    .select('+password')
    .then((user) => {
      bcrypt.compare(String(password), user.password).then((isValidUser) => {
        if (isValidUser) {
          const { NODE_ENV, JWT_SECRET_KEY } = process.env;
          const jwt = jsonWebToken.sign(
            {
              _id: user._id,
            },
            NODE_ENV === 'production' ? JWT_SECRET_KEY : 'dev-secret-key',
            { expiresIn: '7d' },
          );
          res.cookie('jwt', jwt, {
            httpOnly: true,
            sameSite: true,
          });
          res.send(user.toJSON());
        } else {
          next(new UnauthorizedError());
        }
      });
    })
    .catch(next);
};

const getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.send(user))
    .catch(next);
};

const updateUserProfile = (req, res, next) => {
  const { body } = req;
  User.findByIdAndUpdate(
    req.user._id,
    { name: body.name, email: body.email },
    { new: true, runValidators: true },
  )
    .orFail(() => next(new NotFoundError(userNotFoundByIdMessage)))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new InvalidDataError());
      } else if (err.code === 11000) {
        next(new EmailIsExistsError());
      } else {
        next(err);
      }
    });
};

module.exports = {
  createUser,
  login,
  getUserInfo,
  updateUserProfile,
};

const { errorMessages } = require('../utils/constants');

const { defaultMsg } = errorMessages;

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errMessage = statusCode === 500 ? defaultMsg : err.message;
  res.status(statusCode).send({ message: errMessage });
  next();
};

module.exports = errorHandler;

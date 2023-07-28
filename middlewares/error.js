const { defaultErrorMessage } = require('../utils/constants');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errMessage = statusCode === 500 ? defaultErrorMessage : err.message;
  res.status(statusCode).send({ message: errMessage });
  next();
};

module.exports = errorHandler;

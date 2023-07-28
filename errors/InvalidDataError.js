const { invalidDataErrorMessage } = require('../utils/constants');

class InvalidDataError extends Error {
  constructor(err) {
    super(err);
    this.message = invalidDataErrorMessage;
    this.statusCode = 400;
  }
}

module.exports = InvalidDataError;

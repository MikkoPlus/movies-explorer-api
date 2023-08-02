const { errorMessages } = require('../utils/constants');

const { invalidDataMsg } = errorMessages;
class InvalidDataError extends Error {
  constructor(err) {
    super(err);
    this.message = invalidDataMsg;
    this.statusCode = 400;
  }
}

module.exports = InvalidDataError;

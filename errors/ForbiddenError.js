const { errorMessages } = require('../utils/constants');

const { forbidenMsg } = errorMessages;

class ForbidenError extends Error {
  constructor(err) {
    super(err);
    this.message = forbidenMsg;
    this.statusCode = 403;
  }
}

module.exports = ForbidenError;

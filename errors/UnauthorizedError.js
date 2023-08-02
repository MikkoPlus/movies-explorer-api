const { errorMessages } = require('../utils/constants');

const { unauthorizedMsg } = errorMessages;

class UnauthorizedError extends Error {
  constructor(err) {
    super(err);
    this.message = unauthorizedMsg;
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;

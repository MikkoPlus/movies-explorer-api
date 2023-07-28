const { unauthorizedErrorMessage } = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor(err) {
    super(err);
    this.message = unauthorizedErrorMessage;
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;

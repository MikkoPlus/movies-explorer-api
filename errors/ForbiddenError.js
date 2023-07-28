const { forbidenErrorMessage } = require('../utils/constants');

class ForbidenError extends Error {
  constructor(err) {
    super(err);
    this.message = forbidenErrorMessage;
    this.statusCode = 403;
  }
}

module.exports = ForbidenError;

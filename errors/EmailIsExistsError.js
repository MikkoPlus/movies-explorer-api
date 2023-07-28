const { emailIsExistsErrorMessage } = require('../utils/constants');

class EmailIsExistsError extends Error {
  constructor(err) {
    super(err);
    this.message = emailIsExistsErrorMessage;
    this.statusCode = 409;
  }
}

module.exports = EmailIsExistsError;

const { errorMessages } = require('../utils/constants');

const { emailIsExistsMsg } = errorMessages;
class EmailIsExistsError extends Error {
  constructor(err) {
    super(err);
    this.message = emailIsExistsMsg;
    this.statusCode = 409;
  }
}

module.exports = EmailIsExistsError;

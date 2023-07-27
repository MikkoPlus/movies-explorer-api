class InvalidDataError extends Error {
  constructor(err) {
    super(err);
    this.message = 'Переданные данные не валидны';
    this.statusCode = 400;
  }
}

module.exports = InvalidDataError;

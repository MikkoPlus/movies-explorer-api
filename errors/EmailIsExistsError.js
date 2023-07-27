class EmailIsExistsError extends Error {
  constructor(err) {
    super(err);
    this.message = 'Пользователь с такой почтой уже существует';
    this.statusCode = 409;
  }
}

module.exports = EmailIsExistsError;

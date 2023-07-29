const baseUrls = {
  baseSiteUrl: 'https://movie-hunter.nomoreparties.sbs',
  devDataBaseUrl: 'mongodb://127.0.0.1:27017/devbitfilmsbd',
};
const resultMessages = {
  exitMsg: { message: 'Выход' },
  filmIsDeleteMsg: { message: 'Фильм удалён' },
};

const errorMessages = {
  unknownMethodOrUrlMsg: 'Такого метода или URL не существует',
  filmNotFoundByIdMsg: 'Фильм с переданным _id не найден',
  userNotFoundByIdMsg: 'Пользователь с таким _id не найден',
  emailIsExistsMsg: 'Пользователь с такой почтой уже существует',
  invalidDataMsg: 'Переданные данные не валидны',
  unauthorizedMsg: 'Ошибка авторизации',
  forbidenMsg: 'Ошибка прав доступа',
  defaultMsg: 'Внутренняя ошибка сервера',
};

module.exports = {
  baseUrls,
  resultMessages,
  errorMessages,
};

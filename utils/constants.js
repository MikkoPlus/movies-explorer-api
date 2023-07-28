const baseSiteUrl = 'https://movie-hunter.nomoreparties.sbs';
const devDataBaseUrl = 'mongodb://127.0.0.1:27017/devbitfilmsbd';
const unknownMethodOrUrlErrorMessage = 'Такого метода или URL не существует';
const exitMessage = { message: 'Выход' };
const filmIsDeleteMessage = { message: 'Фильм удалён' };
const filmNotFoundByIdMessage = 'Фильм с переданным _id не найден';
const userNotFoundByIdMessage = 'Пользователь с таким _id не найден';
const emailIsExistsErrorMessage = 'Пользователь с такой почтой уже существует';
const invalidDataErrorMessage = 'Переданные данные не валидны';
const unauthorizedErrorMessage = 'Ошибка авторизации';
const forbidenErrorMessage = 'Ошибка прав доступа';
const defaultErrorMessage = 'Внутренняя ошибка сервера';

module.exports = {
  baseSiteUrl,
  devDataBaseUrl,
  unknownMethodOrUrlErrorMessage,
  exitMessage,
  filmIsDeleteMessage,
  filmNotFoundByIdMessage,
  userNotFoundByIdMessage,
  emailIsExistsErrorMessage,
  invalidDataErrorMessage,
  unauthorizedErrorMessage,
  forbidenErrorMessage,
  defaultErrorMessage,
};

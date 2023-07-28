const baseSiteUrl = 'https://movie-hunter.nomoreparties.sbs';
const unknownMethodOrUrlErrorMessage = 'Такого метода или URL не существует';
const exitMessage = { message: 'Выход' };
const filmIsDeleteMessage = { message: 'Фильм удалён' };
const filmNotFoundByIdMessage = 'Фильм с переданным _id не найден';
const userNotFoundByIdMessage = 'Пользователь с таким _id не найден';

module.exports = {
  baseSiteUrl,
  unknownMethodOrUrlErrorMessage,
  exitMessage,
  filmIsDeleteMessage,
  filmNotFoundByIdMessage,
  userNotFoundByIdMessage,
};

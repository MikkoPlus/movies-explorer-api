const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Поле "name" должно быть заполнено'],
      minLength: [2, 'Минимальная длинная поля "name" - 2 символа'],
      maxLength: [30, 'Максимальная длинная поля "name" - 30 символов'],
    },
    email: {
      type: String,
      required: [true, 'Поле "email" должно быть заполнено'],
      unique: true,
      validate: {
        validator: (v) => isEmail(v),
        message: 'Некорректный email',
      },
    },
    password: {
      type: String,
      select: false,
      required: [true, 'Поле "password" должно быть заполнено'],
    },
  },
  {
    versionKey: false,
  },
);

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;

  return user;
};

module.exports = mongoose.model('user', userSchema);

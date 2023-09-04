require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const helmet = require('helmet');
const cookkieParser = require('cookie-parser');
const cors = require('cors');
const { errors } = require('celebrate');

const errorHandler = require('./middlewares/error');
const { errorLogger, requestLogger } = require('./middlewares/logger');
const router = require('./routes/index');
const limiter = require('./middlewares/rateLimiter');
const { baseUrls } = require('./utils/constants');

const { devDataBaseUrl } = baseUrls;

const { NODE_ENV, PORT, DATA_BASE_URL } = process.env;
const app = express();

mongoose.connect(NODE_ENV === 'production' ? DATA_BASE_URL : devDataBaseUrl);
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(
  cors({ credentials: true, origin: 'https://movie-hunter.nomoreparties.sbs' }),
);
app.use((req, res, next) => {
  res.header(
    `Access-Control-Allow-Origin`,
    `https://movie-hunter.nomoreparties.sbs`,
  );
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
});
app.options('https://movie-hunter.nomoreparties.sbs', cors());
app.use(cookkieParser());
app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);

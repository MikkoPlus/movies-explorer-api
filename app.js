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

const { devDataBaseUrl, baseSiteUrl } = baseUrls;

const { NODE_ENV, PORT, DATA_BASE_URL } = process.env;
const app = express();

mongoose.connect(NODE_ENV === 'production' ? DATA_BASE_URL : devDataBaseUrl);
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(
  cors({ credentials: true, origin: 'https://movie-hunter.nomoreparties.sbs' }),
);

app.options(baseSiteUrl, cors());
app.use(cookkieParser());
app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);

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
const { baseSiteUrl } = require('./utils/constants');

const { PORT, DATA_BASE_URL } = process.env;
const app = express();

mongoose.connect(DATA_BASE_URL);
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(cors({ credentials: true, origin: baseSiteUrl }));
app.options('*', cors());
app.use(cookkieParser());
app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);

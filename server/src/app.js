const express = require('express');
const morgan = require('morgan');
const coffeesRouter = require('./routers/coffeeRouter');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/coffee', coffeesRouter);

module.exports = app;

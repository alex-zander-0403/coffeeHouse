const express = require('express');
const morgan = require('morgan');
const coffeesRouter = require('./routers/coffeeRouter');
const authRouter = require('./routers/authRouter');
const tokenRouter = require('./routers/tokenRouter');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/coffee', coffeesRouter);

module.exports = app;

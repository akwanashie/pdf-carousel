var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
let mustacheExpress = require('mustache-express');
const session = require('express-session');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const authMiddleware = require('./lib/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 3600000
  }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRouter);
app.use(authMiddleware);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error' });
});

module.exports = app;

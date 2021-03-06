var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());

  next();
})

app.use('/api/classrooms', (req, res, next) => {
  console.log(req.path, ' on classrooms');

  next();
})

app.get('/api/classrooms/:id', (req, res, next) => {
  
  if(req.params.id == '0') {
    console.log('We have reached hre');
    next();
  } else {
    next();
  }
}, (req, res, next) => {
  console.log('this is the next middleware for the classrooms show');

  next();
})

// app.use('/dev', (req, res, next) => {
//   console.log('Dev Middleware One');

//   next();
// }, (req, res, next) => {
//   console.log('Dev Middleware Two');

//   return res.send({
//     message: 'You will not reach there'
//   })

//   next();
// }, (req, res, next) => {
//   console.log('Dev Middleware Three');

//   next();
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;

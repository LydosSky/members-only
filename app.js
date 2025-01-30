const express = require('express');
const path = require('node:path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('./passport');
const session = require('express-session');
dotenv.config();

const authenticationRouter = require('./routes/authenticationRouter');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Authentication
app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use('/authentication', authenticationRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Express app listenning on port ${PORT}!`);
});

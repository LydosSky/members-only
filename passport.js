const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcryptjs = require('bcryptjs');
const pool = require('./database/pool');
const userQueries = require('./database/userQueries');

passport.use(
  new LocalStrategy(function (id, password, done) {
    return userQueries
      .getUserById(id)
      .then((user) => {
        if (!user)
          return done(null, false, {
            message: 'There is no user with given ID.',
          });
        return bcryptjs
          .compare(password, user.password_hash)
          .then((match) => ({ match, user }));
      })
      .then(({ match, user }) => {
        if (!match) return done(null, false, { message: 'Incorrect password' });
        return done(null, user);
      })
      .catch((err) => done(err));
  }),
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  return userQueries
    .getUserById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

module.exports = passport;

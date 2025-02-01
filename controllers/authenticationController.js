const { validationResult } = require('express-validator');
const userQueries = require('../database/userQueries');
const bcryptjs = require('bcryptjs');

/**
 * Creates an object that will be passed to the
 * template file.
 * */
function createTemplate(formName, title, errors, values) {
  return {
    formName,
    title,
    errors,
    values,
  };
}

exports.getSignUP = function (req, res) {
  res.render('forms', createTemplate('sign-up', 'Sign Up', [], {}));
};

exports.postSignUp = function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    res.render(
      'forms',
      createTemplate('sign-up', 'Sign Up', errors.array(), req.body),
    );
  const { username, firstname, lastname, email, password } = req.body;
  bcryptjs
    .hash(password, 10)
    .then((password_hash) =>
      userQueries.createUser({
        username,
        firstname,
        lastname,
        email,
        password_hash,
      }),
    )
    .then(() => res.send('User Created'))
    .catch((err) =>
      res.render('forms', createTemplate('sign-up', 'Sign Up', err, req.body)),
    );
};

exports.getLogIn = function (req, res) {
  res.render('forms', createTemplate('log-in', 'Log In', [], {}));
};

exports.postLogIn = function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    res.render('forms', createTemplate('log-in', 'Log In', errors.array(), {}));
};

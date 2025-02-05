const { validationResult } = require('express-validator');
const userQueries = require('../database/userQueries');
const roleQueries = require('../database/roleQueries');
const { UserRole } = require('../database/roleQueries');
const bcryptjs = require('bcryptjs');

/**
 * Creates an object that will be passed to the
 * template file.
nn * */
function createTemplate(formName, title, errors = [], values = {}) {
  return {
    formName,
    title,
    errors,
    values,
  };
}

exports.getSignUP = function (req, res) {
  res.render('forms', createTemplate('sign-up', 'Sign Up'));
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
    .then(() => res.redirect('/authentication/log-in'))
    .catch((err) =>
      res.render('forms', createTemplate('sign-up', 'Sign Up', err, req.body)),
    );
};

exports.getLogIn = function (req, res) {
  res.render('forms', createTemplate('log-in', 'Log In'));
};

exports.postLogIn = function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    res.render('forms', createTemplate('log-in', 'Log In', errors.array()));
};

exports.postLogOut = function (req, res, next) {
  req.logout((err) => {
    if (err) return next(err);
    return res.redirect('/');
  });
};

exports.getMember = function (req, res) {
  res.render('forms', createTemplate('member', 'Become a Member'));
};

exports.postMember = function (req, res) {
  const errors = validationResult(req);
  const user_id = res.locals.currentUser.id;
  if (!errors.isEmpty())
    return res.render(
      'forms',
      createTemplate('member', 'Become a Member', errors.array()),
    );
  return roleQueries
    .changeUserRole(user_id, UserRole.MEMBER)
    .then((response) => res.redirect('/'));
};

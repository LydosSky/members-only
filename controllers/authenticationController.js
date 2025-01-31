const { validationResult } = require('express-validator');

exports.getSignUP = function (req, res) {
  res.render('forms', { formName: 'sign-up', title: 'Sign Up' });
};

exports.postSignUp = function (req, res) {
  console.log(validationResult(req));
  res.redirect('/authentication/sign-up');
};

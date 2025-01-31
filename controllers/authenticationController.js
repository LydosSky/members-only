const { validationResult } = require('express-validator');

exports.getSignUP = function (req, res) {
  res.render('forms', {
    formName: 'sign-up',
    title: 'Sign Up',
    errors: [],
    values: {},
  });
};

exports.postSignUp = function (req, res) {
  const errors = validationResult(req);
  console.log(errors.array());
  if (!errors.isEmpty())
    res.render('forms', {
      formName: 'sign-up',
      title: 'Sign Up',
      errors: errors.array(),
      values: req.body,
    });
};

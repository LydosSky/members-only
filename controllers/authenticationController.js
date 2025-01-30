exports.getSignUP = function (req, res) {
  res.render('forms', { formName: 'sign-up', title: 'Sign Up' });
};

exports.postSignUp = function (req, res) {
  res.redirect('/authentication/sign-up');
};

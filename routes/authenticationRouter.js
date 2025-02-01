const { Router } = require('express');
const authenticationController = require('../controllers/authenticationController');
const signupValidator = require('../validators/signupValidator');
const loginValidator = require('../validators/loginValidator');
const passport = require('../passport');

const router = Router();

router.get('/sign-up', authenticationController.getSignUP);
router.post('/sign-up', signupValidator, authenticationController.postSignUp);
router.get('/log-in', authenticationController.getLogIn);
router.post(
  '/log-in',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/authentication/log-in',
  }),
  loginValidator,
  authenticationController.postLogIn,
);
router.post('/log-out', authenticationController.postLogOut);

module.exports = router;

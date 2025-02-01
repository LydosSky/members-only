const { Router } = require('express');
const authenticationController = require('../controllers/authenticationController');
const signupValidator = require('../validators/signupValidator');
const loginValidator = require('../validators/loginValidator');

const router = Router();

router.get('/sign-up', authenticationController.getSignUP);
router.post('/sign-up', signupValidator, authenticationController.postSignUp);
router.get('/log-in', authenticationController.getLogIn);
router.post('/log-in', loginValidator, authenticationController.postLogIn);

module.exports = router;

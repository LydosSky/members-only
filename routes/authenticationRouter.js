const { Router } = require('express');
const authenticationController = require('../controllers/authenticationController');
const signupValidator = require('../validators/signupValidator');

const router = Router();

router.get('/sign-up', authenticationController.getSignUP);
router.post('/sign-up', signupValidator, authenticationController.postSignUp);

module.exports = router;

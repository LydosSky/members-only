const { Router } = require('express');
const authenticationController = require('../controllers/authenticationController');

const router = Router();

router.get('/sign-up', authenticationController.getSignUP);
router.post('/sign-up', authenticationController.postSignUp);

module.exports = router;

const { body } = require('express-validator');

module.exports = [
  body('answer')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Answer is required')
    .isInt()
    .withMessage('Answer must be a number'),
];

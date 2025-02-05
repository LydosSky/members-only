const { body } = require('express-validator');

module.exports = [
  body('post')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Post cannot be empty and required'),
];

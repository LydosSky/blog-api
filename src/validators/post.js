import { body, param } from 'express-validator';

const createValidator = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Post must have a title')
    .isLength({ max: 70 })
    .withMessage('Title must be at most 70 characters long.'),
  body('content').trim().notEmpty().withMessage('Post must have a content'),
];

const updateValidator = [
  param('id').trim().notEmpty().withMessage('Id of the post missing.'),
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Post must have a title')
    .isLength({ max: 70 })
    .withMessage('Title must be at most 70 characters long.'),
  body('content').trim().notEmpty().withMessage('Post must have a content'),
];

const deleteValidator = [
  param('id').trim().notEmpty().withMessage('Id of the post missing.'),
];

export default { createValidator, updateValidator, deleteValidator };

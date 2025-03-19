import { body, param } from 'express-validator';

const createValidator = [
  body('title')
    .exists()
    .withMessage('Post title is required.')
    .trim()
    .notEmpty()
    .withMessage('Post title cannot be empty.')
    .isLength({ max: 70 })
    .withMessage('Title must be at most 70 characters long.'),
  body('content')
    .exists()
    .withMessage('Post content is required.')
    .trim()
    .notEmpty()
    .withMessage('Post content cannot be empty.'),
];

const updateValidator = [
  param('id')
    .exists()
    .withMessage('Post ID param is required.')
    .trim()
    .notEmpty()
    .withMessage('Post ID cannot be empty.'),
  body('title')
    .exists()
    .withMessage('Post title is required.')
    .trim()
    .notEmpty()
    .withMessage('Post title cannot be empty.')
    .isLength({ max: 70 })
    .withMessage('Title must be at most 70 characters long.'),
  body('content')
    .exists()
    .withMessage('Post content is required.')
    .trim()
    .notEmpty()
    .withMessage('Post content cannot be empty.'),
];

const deleteValidator = [
  param('id')
    .exists()
    .withMessage('Post ID param is required.')
    .trim()
    .notEmpty()
    .withMessage('Post ID cannot be empty.'),
];

export default { createValidator, updateValidator, deleteValidator };

import { body, param } from 'express-validator';

const getByIdValidator = [
  param('id')
    .exists()
    .withMessage('Comment ID paramter is required.')
    .trim()
    .notEmpty()
    .withMessage('Comment ID param cannot be empty.'),
];

const createValidator = [
  body('content')
    .exists()
    .withMessage('Content is required.')
    .trim()
    .notEmpty()
    .withMessage('Content cannot be empty.'),
  body('postId')
    .exists()
    .withMessage('Post ID is required')
    .trim()
    .notEmpty()
    .withMessage('Post ID cannot be empty.')
    .isUUID()
    .withMessage('Post ID is UUID.'),
];

const updateValidator = [
  param('id')
    .exists()
    .withMessage('ID parameter is required.')
    .trim()
    .notEmpty()
    .withMessage('Comment ID cannot be empty.')
    .isUUID()
    .withMessage('Comment ID is UUID.'),
  body('content').trim().notEmpty().withMessage('Content is required.'),
];

const deleteValidator = [
  param('id')
    .exists()
    .withMessage('ID parameter is required.')
    .trim()
    .notEmpty()
    .withMessage('Comment ID cannt be empty.')
    .isUUID()
    .withMessage('Comment ID is UUID.'),
];

export default {
  getByIdValidator,
  createValidator,
  updateValidator,
  deleteValidator,
};

import { body, param } from 'express-validator';

const createValidator = [
  body('content').trim().notEmpty().withMessage('Content is required.'),
  body('postId')
    .trim()
    .notEmpty()
    .withMessage('Post ID is required.')
    .isUUID()
    .withMessage('Post ID is UUID.'),
];

const updateValidator = [
  param('id').trim().notEmpty().withMessage('Comment ID is required'),
  body('content').trim().notEmpty().withMessage('Content is required.'),
];

const deleteValidator = [
  param('id').trim().notEmpty().withMessage('Comment ID is required'),
];

export default { createValidator, updateValidator, deleteValidator };

import { body, param } from 'express-validator';

const createValidator = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required. Must be Unique')
    .isEmail()
    .withMessage('Invalid email adress')
    .normalizeEmail(),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];

const updateValidator = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID param is required')
    .isUUID()
    .withMessage('ID is uuid'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];

const deleteValidator = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID param is required')
    .isUUID()
    .withMessage('ID is uuid'),
];

export default { createValidator, updateValidator, deleteValidator };

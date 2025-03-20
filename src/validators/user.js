import { body, param } from 'express-validator';

const getByIdValidator = [
  param('id')
    .exists()
    .withMessage('User ID paramter is required.')
    .trim()
    .notEmpty()
    .withMessage('User ID param cannot be empty.'),
];

const createValidator = [
  body('email')
    .exists()
    .withMessage('Email is required.')
    .trim()
    .notEmpty()
    .withMessage('Email cannot be empty.')
    .isEmail()
    .withMessage('Email must be email.')
    .normalizeEmail(),
  body('password')
    .exists()
    .withMessage('Password is required.')
    .trim()
    .notEmpty()
    .withMessage('Password cannot be empty.')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long.'),
];

const updateValidator = [
  param('id')
    .exists()
    .withMessage('User ID param is required.')
    .trim()
    .notEmpty()
    .withMessage('User ID param cannot be empty.')
    .isUUID()
    .withMessage('User ID is UUID.'),
  body('password')
    .exists()
    .withMessage('User password is required.')
    .trim()
    .notEmpty()
    .withMessage('User password cannot be empty.')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long.'),
];

const deleteValidator = [
  param('id')
    .exists()
    .withMessage('User ID param is required.')
    .trim()
    .notEmpty()
    .withMessage('User ID param cannot be empty.')
    .isUUID()
    .withMessage('User ID is UUID.'),
];

export default {
  getByIdValidator,
  createValidator,
  updateValidator,
  deleteValidator,
};

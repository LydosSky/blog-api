/**
 * User controller.
 *
 * @description Functions to handle user related operations.
 * @module controllers/user
 */
import models from '../models';
import expressAsyncHandler from 'express-async-handler';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
/**
 * Handles GETing all of the users.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling
 *
 * @async
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 */
const getUsers = expressAsyncHandler(function (req, res) {
  return models.user.getUsers().then((users) => res.json(users));
});

/**
 * Handles GETing user with ID.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling
 *
 * @async
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 */
const getUserById = expressAsyncHandler(function (req, res) {
  return models.user.getUserById(req.params.id).then((user) => res.json(user));
});

/**
 * Handles POSTing(creating) the User.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling
 *
 * @async
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} -  Promise resolves when the response is sent.
 */
const createUser = expressAsyncHandler(function (req, res) {
  return bcryptjs
    .hash(req.body.password, 10)
    .then((hashedPw) =>
      models.user.createUser({
        email: req.body.email,
        password: hashedPw,
      }),
    )
    .then((user) => res.json(user));
});

/**
 * Handlest POST login the User.
 * note: Function is wrapped with `expressAsyncHandler` for
 * erro handling.
 *
 * @async
p * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 * */
const loginUser = expressAsyncHandler(function (req, res) {
  return models.user
    .getUserByEmail(req.body.email)
    .then((user) => ({
      passwordMatch: bcryptjs.compare(user.password, req.body.password),
      user: user,
    }))
    .then(({ passwordMatch, user }) =>
      jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '120',
      }),
    )
    .then((token) => res.json({ token }));
});

/**
 * Handles PUTting(updating) the User.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling
 *
 * @async
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 */
const updateUser = expressAsyncHandler(function (req, res) {
  return models.user
    .updateUser({
      id: req.params.id,
      password: req.body.password,
    })
    .then((user) => res.json(user));
});

/**
 * Handles DELETing the User.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling
 *
 * @async
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 */
const deleteUser = expressAsyncHandler(function (req, res) {
  return models.user.deleteUser(req.params.id).then((user) => res.json(user));
});

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};

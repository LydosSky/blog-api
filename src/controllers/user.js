/**
 * User controller.
 *
 * Functions to handle user related operations.
 *
 * @module controllers/user
 */
import models from '../models';
import expressAsyncHandler from 'express-async-handler';

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
  return models.user
    .createUser({
      email: req.body.email,
      password: req.body.password,
    })
    .then((user) => res.json(user));
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

export default { getUsers, getUserById, createUser, updateUser, deleteUser };

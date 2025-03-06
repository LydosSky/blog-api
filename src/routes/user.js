/**
 * User router
 *
 * @description Router that handles user related routes.
 * @module routes/user
 */

/**
 * @typedef {Object} User
 * @property {string} id - The user ID.
 * @property {string} email - The user email.
 * @property {string} password - The user password.
 * @property {Object} posts - The user's posts.
 * @property {Object} comments - The user's comments.
 * @property {Date} createdAt - The date user created.
 * @property {Date} updatedAt - The date user updated.
 */

import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

/**
 * @route GET /user
 * @summary Retrieves all users.
 * @access Public
 * @returns {User[]} 200 - An array of User object.
 */
router.get('', controllers.user.getUsers);

/**
 * @route GET /user/{id}
 * @summary Retrieves user by given ID.
 * @access Public
 * @param {string} req.params.id - The ID
 * @returns {User} 200 - The user object or null if not found.
 */
router.get('/:id', controllers.user.getUserById);

/**
 * @route POST /user
 * @summary Creates the user with given credentials.
 * @access Public
 * @param {string} req.body.email - email of the User.
 * @param {string} req.body.password - password of the User.
 * @returns {User} 200 - The user object created.
 */
router.post('', controllers.user.createUser);

/**
 * @route PUT /user/{id}
 * @summary Updates the user with given ID.
 * @access Public
 * @param {string} req.params.id - The ID.
 * @returns {User} 200 - The user object updated.
 */
router.put('/:id', controllers.user.updateUser);

/**
 * @route DELETE /user/{id}
 * @summary Deletes the user with given ID.
 * @access Public
 * @param {string} req.params.id - The ID.
 * @returns {User} 200 - The user object deleted.
 */
router.delete('/:id', controllers.user.deleteUser);

export default router;

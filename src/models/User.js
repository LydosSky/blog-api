/**
 * User model.
 *
 * @description These functions handle user-related database CRUD operations
 * @module models/user
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

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Get user by ID, including posts and comments.
 *
 * @param {string} id - ID of the user.
 * @returns {Promise<User | null>} - A promise resolving
 * to the user object or `null` if not found.
 */
function getUserById(id) {
  return prisma.user.findUnique({
    where: { id },
    include: {
      posts: true,
      comments: true,
    },
  });
}

/**
 * Get all the users, including posts and comments.
 *
 * @returns {Promise<Array<User>>}
 *  A promise resolving to the user object array or empty array []
 *  if non user.
 */
function getUsers() {
  return prisma.user.findMany({
    include: {
      posts: true,
      comments: true,
    },
  });
}

/**
 * Get User by `email`.
 *
 * @param {string} email - Email of the wanted User.
 * @returns {Promise<User | null>} - A Promise resolving to the User object
 * or `null` if user not found.
 * */
function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}

/**
 * Create a user with given credentials.
 *
 * @param {Object} user  - The user data.
 * @param {string} user.email - The user's email.
 * @param {string} user.password - The user's password (hashed).
 * @returns {Promise<User>} - A promise resolving to the created user object.
 */
function createUser(user) {
  return prisma.user.create({ data: user });
}

/**
 * Update a user with new credentials.
 *
 * @param {Object} user - The user data.
 * @param {string} user.id - The user's id.
 * @param {string} user.password - The user's new updated password (hashed)
 * @returns {Promise<User>} - A promise resolving to the updated user object.
 */
function updateUser(user) {
  return prisma.user.update({
    where: { id: user.id },
    data: { password: user.password },
  });
}

/**
 * Delete a user with given ID.
 *
 * @param {string} id - The user ID.
 * @returns {Promise<User>} - A promise resolving to the deleted user object.
 */
function deleteUser(id) {
  return prisma.user.delete({ where: { id: id } });
}

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail,
};

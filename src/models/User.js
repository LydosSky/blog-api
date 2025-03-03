import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Get user by ID, including posts and comments.
 *
 * @param {string} id - ID of the user.
 * @returns {Promise<{
 *      id: string,
 *      email:string,
 *      password: string,
 *      posts: Object[],
 *      comments: Object[],
 *      createdAt: Date,
 *      updatedAt: Date
 *  } | null>}
 *  A promise resolving to the user object or `null`
 *  if not found.
 */
export function getUserById(id) {
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
 * @returns {Promise<Array<{
 *      id: string,
 *      email:string,
 *      password: string,
 *      posts: Object[],
 *      comments: Object[],
 *      createdAt: Date,
 *      updatedAt: Date
 *  }>>}
 *  A promise resolving to the user object array or empty array []
 *  if non user.
 */
export function getUsers() {
  return prisma.user.findMany({
    include: {
      posts: true,
      comments: true,
    },
  });
}

/**
 * Create a user with given credentials.
 *
 * @param {Object} user  - The user data.
 * @param {string} user.email - The user's email.
 * @param {string} user.password - The user's password (hashed).
 * @returns {Promise<{
 *      id: string,
 *      email:string,
 *      createdAt: Date,
 *      updatedAt: Date
 *  }>}
 * A promise resolving to the created user object.
 */
export function createUser(user) {
  return prisma.user.create({ data: user });
}

/**
 * Update a user with new credentials.
 *
 * @param {Object} user - The user data.
 * @param {string} user.id - The user's id.
 * @param {string} user.password - The user's new updated password (hashed)
 * @returns {Promise<{
 *      id: string,
 *      email:string,
 *      createdAt: Date,
 *      updatedAt: Date
 *  }>}
 * A promise resolving to the updated user object.
 */
export function updateUser(user) {
  return prisma.user.update({
    where: { id: user.id },
    data: { password: user.password },
  });
}

/**
 * Delete a user with given ID.
 *
 * @param {string} id - The user ID.
 * @returns {Promise<{
 *      id: string,
 *      email:string,
 *      password: string,
 *      posts: Object[],
 *      comments: Object[],
 *      createdAt: Date,
 *      updatedAt: Date
 *  }>}
 *  A promise resolving to the deleted user object.
 */
export function deleteUser(id) {
  return prisma.user.delete({ where: { id: id } });
}

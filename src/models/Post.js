/**
 * Post model.
 *
 * These functions handle post-related database CRUD operations.
 *
 *
 * @module models/post
 */

/**
 * @typedef {Object} Post
 * @property {string} id - The post ID.
 * @property {string} title - The post title.
 * @property {string} content - The post content.
 * @property {string} userId - The post's author ID.
 * @property {Object} comments - The post's comments.
 * @property {Date} createdAt - The date post created.
 * @property {Date} updatedAt - The date post updated.
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Return post with Given ID.
 *
 * @param {string} id - ID of the post
 * @returns {Promise<Post | null>} - A Promise resolving to the post object or `null`
 * if not found.
 */
function getPostById(id) {
  return prisma.post.findUnique({ where: { id }, include: { comments: true } });
}

/**
 * Return all of the posts.
 *
 * @returns {Promise<Array<Post>>} - A Promise resolving to the array of post object
 * or empty array.
 */
function getPosts() {
  return prisma.post.findMany();
}

/**
 * Create a new Post.
 *
 * @param {Object} post - The post data
 * @param {string} post.title - The post's title
 * @param {string} post.content - The post's content
 * @param {string} post.userId - The post's user's id
 * @returns {Promise<Post>} - A Promise resolving into the post created.
 */
function createPost(post) {
  return prisma.post.create({
    data: post,
  });
}

/**
 * Update an existing post.
 *
 * @param {Object} post - The post to update.
 * @param {string} post.id - The post's ID.
 * @param {string} post.title - The post's title.
 * @param {string} post.content - The post's content.
 * @returns {Promise<Post>} - A Promise resolving into the post updated.
 */
function updatePost(post) {
  return prisma.post.update({
    where: { id: post.id },
    data: post,
    include: {
      comments: true,
    },
  });
}

/**
 * Delete an post with the given ID.
 *
 * @param {string} id - Post's id.
 * @returns {Promise<Post>} - A Promise resolving into the post updated.
 */
function deletePost(id) {
  return prisma.post.delete({ where: { id }, include: { comments: true } });
}

export default { getPostById, getPosts, createPost, updatePost, deletePost };

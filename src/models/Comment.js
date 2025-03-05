/**
 * Post model.
 *
 * These functions handle comment-related database CRUD operations.
 *
 *
 * @module models/comment
 */

/**
 * @typedef {Object} Comment
 * @property {string} id - The comment ID.
 * @property {string} content - The comment content.
 * @property {string} postId - The postId comment belongs to.
 * @property {string} userId - The post's user's ID.
 * @property {Date} createdAt - The date post created.
 * @property {Date} updatedAt - The date post updated.
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Return the comment with given ID.
 *
 * @param {string} id - ID of the wanted comment
 * @returns {Promise<Comment | null>} - A Promise resolves to Comment object
 * or `null` if not found. Select proper information of the post and user object.
 */
function getCommentById(id) {
  return prisma.comment.findUnique({
    where: { id },
    select: {
      id: true,
      content: true,
      userId: true,
      postId: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          email: true,
        },
      },
      post: {
        select: {
          title: true,
        },
      },
    },
  });
}

/**
 * Return all of the comments.
 *
 * @returns {Promise<Array<Comment>>} - A Promise resolves to Comments Array.
 * Also selects proper fields of post and user object.
 */
function getComments() {
  return prisma.comment.findMany({
    select: {
      id: true,
      content: true,
      userId: true,
      postId: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          email: true,
        },
      },
      post: {
        select: {
          title: true,
        },
      },
    },
  });
}

/**
 * Creates a new comment.
 *
 * @param {Object} comment - The comment object.
 * @param {string} comment.content - The comment's content.
 * @param {string} comment.userId - The comment's owner.
 * @param {string} comment.postId - The comment's post.
 * @returns {Promise<Comment>} - A Promise resolves to new Created Comment.
 * Also selects proper fields of post and user object.
 */
function createComment(comment) {
  return prisma.comment.create({
    data: comment,
    select: {
      id: true,
      content: true,
      userId: true,
      postId: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          email: true,
        },
      },
      post: {
        select: {
          title: true,
        },
      },
    },
  });
}

/**
 * Update a comment.
 *
 * @param {Object} comment - The comment object.
 * @param {string} comment.id - The comment's ID.
 * @param {string} comment.content - The comment's content.
 * @returns {Promise<Comment>} - A Promise resolves to Updated Comment.
 * Also selects proper fields of post and user object.
 */
function updateComment(comment) {
  return prisma.comment.update({
    where: { id: comment.id },
    data: comment,
    select: {
      id: true,
      content: true,
      userId: true,
      postId: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          email: true,
        },
      },
      post: {
        select: {
          title: true,
        },
      },
    },
  });
}

/**
 * Delete a comment.
 *
 * @param {string} id - The comment's ID.
 * @returns {Promise<Comment>} - A Promise resolves to Deleted Comment.
 * Also selects proper fields of post and user object.
 */
function deleteComment(id) {
  return prisma.comment.delete({
    where: { id },
    select: {
      id: true,
      content: true,
      userId: true,
      postId: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          email: true,
        },
      },
      post: {
        select: {
          title: true,
        },
      },
    },
  });
}

export default {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};

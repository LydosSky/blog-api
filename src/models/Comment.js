import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Return the comment with given ID.
 *
 * @param {string} id - ID of the wanted comment
 * @returns {Promise<{
 *      id: string,
 *      content: string,
 *      userId: string,
 *      user: string,
 *      postId: string,
 *      post: string,
 *      createdAt: Date,
 *      updatedAt: Date
 * }> | null}
 * A Promise resolves to Comment object or `null` if not found.
 */
export function getCommentById(id) {
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
 * @returns {Promise<Array<{
 *      id: string,
 *      content: string,
 *      userId: string,
 *      user: string,
 *      postId: string,
 *      post: string,
 *      createdAt: Date,
 *      updatedAt: Date
 * }>>}
 * A Promise resolves to Comments Array.
 */
export function getComments() {
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
 * @returns {Promise<{
 *      id: string,
 *      content: string,
 *      userId: string,
 *      user: string,
 *      postId: string,
 *      post: string,
 *      createdAt: Date,
 *      updatedAt: Date
 * }>}
 * A Promise resolves to new Created Comment.
 */
export function createComment(comment) {
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

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Return post with Given ID.
 * @param {string} id - ID of the post
 * @returns {Promise<{
 *      id: string,
 *      title: string,
 *      content: string,
 *      authorId: string,
 *      author: Object,
 *      comments: Object[],
 *      createdAt: Date,
 *      updatedAt: Date
 * }> | null}
 * A Promise resolving to the post object or `null`
 * if not found.
 */
export function getPostById(id) {
  return prisma.post.findUnique({ where: { id }, include: { comments: true } });
}

/**
 * Return all of the posts.
 * @returns {Promise<Array<{
 *      id: string,
 *      title: string,
 *      content: string,
 *      authorId: string,
 *      author: Object,
 *      comments: Object[],
 *      createdAt: Date,
 *      updatedAt: Date
 * }>}
 * A Promise resolving to the array of post object
 * or empty array.
 */
export function getPosts() {
  return prisma.post.findMany();
}

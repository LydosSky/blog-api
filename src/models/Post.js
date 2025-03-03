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

/**
 * Create a new Post.
 * @param {Object} post - The post data
 * @param {string} post.title - The post's title
 * @param {string} post.content - The post's content
 * @param {string} post.authorId - The post's author's id
 * @returns {Promise<{
 *      id: string,
 *      title: string,
 *      content: string,
 *      authorId: string,
 *      author: Object
 *      createdAt: Date,
 *      updatedAt: Date
 * }>}
 * A Promise resolving into the post created.
 */
export function createPost(post) {
  return prisma.post.create({
    data: post,
    include: {
      author: true,
    },
  });
}

/**
 * Post router
 *
 * @description Router that handles post related routes.
 * @module routes/post
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

import { Router } from 'express';
import controllers from '../controllers';

const router = Router();

/**
 * @route GET /post
 * @summary Retrieves all posts.
 * @access Public
 * @returns {Array<Post>} 200 - An array of Post object.
 */
router.get('', controllers.post.getPosts);

/**
 * @route GET /post/{id}
 * @summary Retrieves the post with given ID.
 * @access Public
 * @param {string} req.params.id - ID of the Post.
 * @returns {Post} 200 - Post object with given ID.
 */
router.get('/:id', controllers.post.getPostById);

/**
 * @route POST /post
 * @summary Creates the post with given title and content.
 * @access Public
 * @param {string} req.body.title - title of the Post.
 * @param {string} req.body.content - content of the Post.
 * @param {string} req.body.userId - author of the Post.
 * @returns {Post} 200 - The Post object created.
 */
router.post('', controllers.post.createPost);

/**
 * @route PUT /post/{id}
 * @summary Updates the post with given title and content.
 * @access Public
 * @param {string} req.params.id - ID of the Post to update.
 * @param {string} req.body.title - title of the Post.
 * @param {string} req.body.content - content of the Post.
 * @param {string} req.body.userId - author of the Post.
 * @returns {Post} 200 - The Post object updated.
 */
router.put('/:id', controllers.post.updatePost);

/**
 * @route DELETE /post/{id}
 * @summary Deletes the post with given ID.
 * @access Public
 * @param {string} req.params.id - ID of the Post to delete.
 * @returns {Post} 200 - The Post object that is deleted.
 */
router.delete('/:id', controllers.post.deletePost);

export default router;

/**
 * Comment router
 *
 * @description Router that handles comment related routes.
 * @module routes/comment
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
import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares';
import validators from '../validators';

const router = Router();

/**
 * @route GET /comment
 * @summary Get all of the comments.
 * @access Public
 * @returns {Array<Comment>} 200 - An array of comments.
 * */
router.get('', controllers.comment.getComments);

/**
 * @route GET /comment/{id}
 * @summary Get comment by ID.
 * @access Public
 * @returns {Comment} 200 - Comment with given ID.
 * */
router.get('/:id', controllers.comment.getCommentById);

/**
 * @route POST /comment
 * @summary Create a comment.
 * @access Protected
 * @returns {Comment} 200 - Comment Created.
 * */
router.post(
  '',
  validators.comment.createValidator,
  middlewares.passport.authenticate('jwt', { session: false }),
  controllers.comment.createComment,
);

/**
 * @route PUT /comment/{id}
 * @summary Update comment with given ID.
 * @access Protected
 * @returns {Comment} 200 - Comment Updated.
 * */
router.put(
  '/:id',
  validators.comment.updateValidator,
  middlewares.passport.authenticate('jwt', { session: false }),
  controllers.comment.updateComment,
);

/**
 * @route DELETE /comment/{id}
 * @summary Delete comment with given ID.
 * @access Protected
 * @returns {Comment} 200 - Comment Deleted.
 * */
router.delete(
  '/:id',
  validators.comment.deleteValidator,
  middlewares.passport.authenticate('jwt', { session: false }),
  controllers.comment.deleteComment,
);

export default router;

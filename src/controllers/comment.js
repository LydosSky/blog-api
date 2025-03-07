/**
 * Comment controller.
 *
 * @description Functions to handle Comment related operations.
 * @module controllers/comment
 */

import expressAsyncHandler from 'express-async-handler';
import models from '../models';

/**
 * Handles GETing all of the comments.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 */
const getComments = expressAsyncHandler(function (req, res) {
  return models.comment.getComments().then((comments) => res.json(comments));
});

/**
 * Handles GETing comment by the given ID.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 * */
const getCommentById = expressAsyncHandler(function (req, res) {
  return models.comment
    .getCommentById(req.params.id)
    .then((comment) => res.json(comment));
});

/**
 * Handles POSTing comment.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 **/
const createComment = expressAsyncHandler(function (req, res) {
  return models.comment
    .createComment({
      content: req.body.content,
      userId: req.body.userId,
      postId: req.body.postId,
    })
    .then((comment) => res.json(comment));
});

/**
 * Handles PUTing comment.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 **/
const updateComment = expressAsyncHandler(function (req, res) {
  return models.comment
    .updateComment({
      id: req.params.id,
      content: req.body.content,
    })
    .then((comment) => res.json(comment));
});

/**
 * Handles DELETing comment.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 **/
const deleteComment = expressAsyncHandler(function (req, res) {
  return models.comment
    .deleteComment(req.params.id)
    .then((comment) => res.json(comment));
});

export default {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};

/**
 * Post controller.
 *
 * @description Functions to handle Post related operations.
 * @module controllers/post
 */

import expressAsyncHandler from 'express-async-handler';
import models from '../models';

/**
 * Handles GETing all of the posts.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 */
const getPosts = expressAsyncHandler(function (req, res) {
  return models.post.getPosts().then((posts) => res.json(posts));
});

/**
 * Handles GETting a post with ID.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 */
const getPostById = expressAsyncHandler(function (req, res) {
  return models.post.getPostById(req.params.id).then((post) => res.json(post));
});

/**
 * Handles POSTing a post.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 */
const createPost = expressAsyncHandler(function (req, res) {
  return models.post
    .createPost({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
    })
    .then((post) => res.json(post));
});

/**
 * Handlers PUTing a post.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 */
const updatePost = expressAsyncHandler(function (req, res) {
  return models.post
    .updatePost({
      id: req.params.id,
      title: req.body.title,
      content: req.body.content,
    })
    .then((post) => res.json(post));
});

/**
 * Handlers DELETing a post.
 * note: Function is wrapped with `expressAsyncHandler` for
 * error handling.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {Promise<void>} - Promise resolves when the response is sent.
 */
const deletePost = expressAsyncHandler(function (req, res) {
  return models.post.deletePost(req.params.id).then((post) => res.json(post));
});

export default { getPosts, getPostById, createPost, updatePost, deletePost };

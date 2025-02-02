const pool = require('./pool');

/**
 * Gets all of the posts
 *
 */
exports.getAllPosts = () => pool.query('SELECT * FROM posts;');

/**
 * Get single post by ID
 * @param {Object} id
 * id object is
 * {
 *   @property {number} id
 * }
 * */
exports.getPostById = ({ id }) =>
  pool.query('SELECT * FROM posts WHERE id = $1', [id]);

/**
 * Create new post
 * @param {Object} post
 * post Object is
 * {
 *   @property {number} user_id
 *   @property {string} post
 * {
 * */
exports.createPost = ({ user_id, post }) =>
  pool.query('INSERT INTO posts (user_id, post) VALUES ($1, $2)', [
    user_id,
    post,
  ]);

/**
 * Update post
 * @param {Object} post
 * {
 *   @property {number} id
 *   @property {string} post
 * }
 * */
exports.updatePost = ({ id, post }) =>
  pool.query('UPDATE posts SET post = $2 WHERE id = $1', [id, post]);

/**
 * Delete post
 * @param {number} id
 * */
exports.deletePost = ({ id }) =>
  pool.query('DELETE FROM posts WHERE id=$1', [id]);

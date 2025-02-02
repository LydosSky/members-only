const postQueries = require('../database/postQueries');

// Get All Posts
exports.getAllPosts = (req, res) =>
  postQueries.getAllPosts().then((posts) => res.send(posts));

// Get post by id
exports.getPostById = (req, res) =>
  postQueries.getPostById(({ id } = req.params)).then((post) => res.send(post));

// Create new Post
exports.createPost = (req, res) =>
  postQueries
    .createPost(({ user_id, post } = req.body))
    .then(() => res.send('Post Created'));

// Update existing Post
exports.updatePost = (req, res) =>
  postQueries
    .updatePost(({ id, post } = req.body))
    .then(() => res.send('Post Updated'));

// Delete Post
exports.deletePost = (req, res) =>
  postQueries
    .deletePost(({ id } = req.params))
    .then(() => res.send('Post Deleted'));

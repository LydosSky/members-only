const postQueries = require('../database/postQueries');
const userQueries = require('../database/userQueries');
const { validationResult } = require('express-validator');

const formatDate = (post) => ({
  ...post,
  created_at: new Date(post.created_at).toLocaleString(),
});

// Get All Posts
exports.getAllPosts = (req, res) =>
  postQueries
    .getAllPosts()
    .then((posts) =>
      res.render('index', { title: 'Posts', posts: posts.map(formatDate) }),
    );

// Get post by id
exports.getPostById = (req, res) =>
  postQueries.getPostById(({ id } = req.params)).then((post) => res.send(post));

// Create view
exports.createGet = (req, res) =>
  res.render('forms', { title: 'Create Post', formName: 'create-post' });

// Create new Post
exports.createPost = function (req, res) {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty())
    return res.render('forms', {
      title: 'Create Post',
      formName: 'create-post',
      errors: errors.array(),
    });
  const user_id = res.locals.currentUser.id;
  const { post } = req.body;
  return postQueries
    .createPost({ user_id, post })
    .then(() => res.redirect('/'));
};
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

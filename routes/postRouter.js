const { Router } = require('express');
const postController = require('../controllers/postController');

const postRouter = Router();

postRouter.get('/', postController.getAllPosts);
postRouter.get('/:id', postController.getPostById);
postRouter.post('/', postController.createPost);
postRouter.post('/update/:id', postController.updatePost);
postRouter.post('/delete/:id', postController.deletePost);

module.exports = postRouter;

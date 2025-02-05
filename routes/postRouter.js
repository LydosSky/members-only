const { Router } = require('express');
const postController = require('../controllers/postController');
const postValidator = require('../validators/postValidator');
const postRouter = Router();

postRouter.get('/', postController.getAllPosts);
postRouter.get('/create', postController.createGet);
postRouter.post('/', postValidator, postController.createPost);
postRouter.post('/update/:id', postController.updatePost);
postRouter.post('/delete/:id', postController.deletePost);

module.exports = postRouter;

const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController');

// CRUD endpoints
router.post('/blog', blogController.createPost);
router.get('/blogs', blogController.getAllPosts);
router.get('/blog/:id', blogController.getPostById);
router.put('/blog/:id', blogController.updatePostById);
router.delete('/blog/:id', blogController.deletePostById);

module.exports = router;


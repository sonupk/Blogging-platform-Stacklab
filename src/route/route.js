const express = require('express')
const router = express.Router()


const blogController = require('../controllers/blogController');

// CRUD endpoints
router.post('/blog', blogController.createPost);
router.get('/', blogController.getAllPosts);
router.get('/:id', blogController.getPostById);
router.put('/:id', blogController.updatePostById);
router.delete('/:id', blogController.deletePostById);

module.exports = router;





module.exports = router

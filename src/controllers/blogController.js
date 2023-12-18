const bcrypt = require('bcryptjs');// for password salting and hashing method
const BlogPost = require('../models/blogModel');

// Controller methods for CRUD operations
const blogController = {
  // Create a new blog post
  createPost: async (req, res) => {
    try {
      const { title, content, author } = req.body;
      const hashedAuthor = await bcrypt.hash(author, 10); // '10' is the saltRounds
      
      const newPost = new BlogPost({
        title,
        content,
        author: hashedAuthor,
      });

      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Retrieve all blog posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await BlogPost.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Retrieve a specific blog post by ID
  getPostById: async (req, res) => {
    try {
      const post = await BlogPost.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(post);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Update a blog post by ID
  updatePostById: async (req, res) => {
    try {
      const { title, content } = req.body;
      const hashedAuthor = await bcrypt.hash(req.body.author, 10); // '10' is the saltRounds
        const updatedPost = await BlogPost.findByIdAndUpdate(
        req.params.id,
        { title, content, author: hashedAuthor },
        { new: true }
      );
      
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      
      res.json(updatedPost);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Delete a blog post by ID
  deletePostById: async (req, res) => {
    try {
      const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
      if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json({ message: 'Post deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = blogController;

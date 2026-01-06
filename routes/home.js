const express = require('express');
const router = express.Router();
const fetchPosts = require('../utils/fetchPosts');

// Home
router.get('/', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.render('index', { posts, title: 'Home' });
  } catch (err) {
    res.send('Error: ' + err.message);
  }
});

// Single Post
router.get('/post/:id', async (req, res) => {
  try {
    const posts = await fetchPosts();
    const post = posts.find(p => p.id == req.params.id);
    if (!post) return res.send('Post not found');
    res.render('post', { post, title: post.title });
  } catch (err) {
    res.send('Error: ' + err.message);
  }
});

module.exports = router;

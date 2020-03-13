const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  }catch(err) {
    res.json({message: err})
  }
});

// Submit a post
router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = post.save();
    res.json(savedPost);
  }
  catch(err) {
      res.json({ message: err })
    }
  })

  //Specific posts
  router.get('/:postId', async (req, res) => {
    const post = Post.findById(req.params.postId);
    try {
      res.json(post);
    } catch(err) {
      res.json({ message: err })
    }
  })

  //Delete post
  router.delete('/:postId', async (req, res) => {
    try {
      const deletedPost =  await Post.remove({_id: req.params.postId});
      res.json(deletedPost);
    } catch(err) {
      res.json({ message: err })
    }
  })

module.exports = router;
const express = require('express');
const router = express.Router();

const Post = require('../../models/post');

// blog api
// /api/blog gauti visu postus json pavidalu
// get all posts
router.get('/', (req, res) => {
  res.json(blogDb);
});

// create new post
router.post('/', (req, res) => {
  // console.log(req.body);
  const newPost = new Post(req.body);
  // saugom db
  newPost
    .save()
    .then((result) => res.json({ msg: 'success', redirect: '/blog' }))
    .catch((err) => res.status(400).json(err.message));
  // paimam req body duomenis ir su jais sukuriam nauja post ir ikeliam i blogDb
});

router.delete('/:id', (req, res) => {});

module.exports = router;

const express = require('express');
const router = express.Router();

const blogDb = require('../../data/blogDb');

// blog api
// /api/blog gauti visu postus json pavidalu
// get all posts
router.get('/', (req, res) => {
  res.json(blogDb);
});

// create new post
router.post('/', (req, res) => {
  console.log(req.body);
  // paimam req body duomenis ir su jais sukuriam nauja post ir ikeliam i blogDb
  res.json({ msg: 'success', redirect: '/blogs' });
});

module.exports = router;

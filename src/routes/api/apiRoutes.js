const express = require('express');
const router = express.Router();

const blogDb = require('../../data/blogDb');

// blog api
// /api/blog gauti visu postus json pavidalu
router.get('/api/blog/', (req, res) => {
  res.json(blogDb);
});

module.exports = router;

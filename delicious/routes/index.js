const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.render('hello', {
    name: 'attila',
    dog: req.query.dog,
    title: 'I love food',
  });
});

module.exports = router;

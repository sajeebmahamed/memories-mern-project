const express = require('express');
const { getPosts, createPost, updatePost } = require('../controller/posts');
// const getPosts = require('../controller/posts');


const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
module.exports = router
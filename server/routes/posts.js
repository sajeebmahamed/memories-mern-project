const express = require('express');
const { getPosts, createPost, updatePost, deletePost } = require('../controller/posts');
// const getPosts = require('../controller/posts');


const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
module.exports = router
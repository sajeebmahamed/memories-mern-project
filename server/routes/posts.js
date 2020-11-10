const express = require('express');
const { getPosts, createPost } = require('../controller/posts');
// const getPosts = require('../controller/posts');


const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)

module.exports = router
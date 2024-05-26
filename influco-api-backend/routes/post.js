const express = require('express');


const postController = require('../controllers/post');
const isAuth = require('../middleware/is-auth')
// const isInfluencer = require('../middleware/is-influencer')
// const isInfluencer = require('../middleware/is-influencer')

const router = express.Router();

router.get('/:influencerId', postController.getAllPosts)
router.post('/',   postController.createPost)
router.delete('/', isAuth, postController.deletePost)
router.post('/add-comment',  postController.addComment)
router.get('/comments/:commentId', postController.getComment)

module.exports = router;
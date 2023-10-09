const express = require('express');
const postControllers = require('../controllers/postControllers')
const router = express.Router();

// @route GET && POST - /posts/ 
router.route("/").get(postControllers.getAllPosts).put(postControllers.createNewPost);

// router.route("/:id").get(postControllers.getPostById);

module.exports = router;
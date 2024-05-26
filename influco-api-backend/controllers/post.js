const Influencer = require("../models/influencer");
const Post = require("../models/post");
const User = require("../models/user");
const Comment = require("../models/comment");
const influencer = require("../models/influencer");

exports.getAllPosts = async (req, res, next) => {
  try {
    const influencerId = req.params.influencerId; // Assuming influencer ID is passed in the request URL

    if (!influencerId) {
      return res
        .status(400)
        .json({ success: false, message: "Missing influencer ID" });
    }

    const posts = await Post.find({ influencer: influencerId });

    if (!posts || posts.length === 0) {
      return res
        .status(404)
        .json({
          success: false,
          message: "No posts found for this influencer",
        });
    }

    res.status(200).json({ posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc      Post post
// @route     POST /post/
exports.createPost = async (req, res, next) => {
  try {
    const { description, influencerId } = req.body;

    // Post oluşturun
    const post = new Post({
      influencer: influencerId, // influencer kimliği (örneğin, req.userId) kullanılmalı
      description: description,
    });

    const savedPost = await post.save();

    const influencer = await Influencer.findById(influencerId);

    influencer.posts.push(savedPost);

    await influencer.save();

    res.status(201).json({
      message: "Post created successfully!",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// @desc      Delete post
// @route     DELETE /post/:id
exports.deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(req.params.id);

    if (!post) {
      return next(
        res.status(401).json({ success: false, message: "Post bulunamadı" })
      );
    }

    const result = await Post.findByIdAndRemove(postId);
    const influencer = await Influencer.findById(req.userId);
    influencer.posts.pull(postId);
    await influencer.save();

    res.status(200).json({ message: "Deleted post." });
  } catch (err) {
    next(err);
  }
};

exports.addComment = async (req, res, next) => {
  try {
    const postId = req.body.postId;
    const userId = req.body.userId;
    const commentText = req.body.description;
    const influencerId = req.body.influencerId;
    console.log(postId,userId,commentText, influencerId)
    // Check if postId, userId, and influencerId exist or are valid before proceeding
    if (!postId || !userId || !influencerId) {
      return res
        .status(400)
        .json({ error: "Invalid postId, userId, or influencerId" });
    }

    const post = await Post.findById(postId);
    const user = await User.findById(userId);
    const influencer = await Influencer.findById(influencerId);

    // Check if post and user exist
    if (!post || !user || !influencer) {
      return res
        .status(404)
        .json({ error: "Post, User, or Influencer not found" });
    }

    // Create a new comment object
    const comment = new Comment({
      user: userId,
      username: user.username, // Use username instead of user's name
      description: commentText,
      influencerId: influencerId,
    });

    // Save the comment
    await comment.save();

    // Update post, user, and influencer with the new comment
    post.comments.push(comment._id);
    user.comments.push(comment._id);
    influencer.comments.push(comment._id);

    // Save the updated post, user, and influencer
    await Promise.all([post.save(), user.save(), influencer.save()]);

    // Respond with a success message or the newly created comment
    res.status(201).json({ message: "Comment added successfully", comment });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getComment = async (req, res, next) => {
  try {
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ comment: comment });
  } catch (err) {
    console.log(err);
  }
};

const path = require("path");
const bcrypt = require("bcryptjs");

const User = require("../models/user");
const Influencer = require("../models/influencer");
const Brand = require("../models/brand");
const Serie = require("../models/serie");

// @desc      Get all imfluencers
// @route     GET /influencers
// @access    Public
exports.getInfluencers = async (req, res, next) => {
  try {
    const influencer = await Influencer.find();

    res.status(200).json({ success: true, data: influencer });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// @desc      Get a single imfluencers
// @route     GET /influencer/:id
// @access    Public
exports.getSingleInfluencer = async (req, res, next) => {
  try {
    const influencer = await Influencer.findById(req.params.id)
      .populate("series")
      .populate({
        path: "posts",
        populate: {
          path: "comments",
          populate: {
            path: "user", // Populate the user information for each comment
            select: "name surname", // Select the fields you want to populate
          },
        },
      })
      .exec();

    if (!influencer) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    const followerCount = influencer.followers.length;
    const postCount = influencer.posts.length;
    res.status(200).json({
      success: true,
      data: influencer,
      followersCount: followerCount,
      postsCount: postCount,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "valid",
    });
  }
};

// @desc      Get all brands
// @route     GET /brands
// @access    Public
exports.getBrands = async (req, res, next) => {
  try {
    const brand = await Brand.find();

    res.status(200).json({ success: true, data: brand });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// @desc      Get a single brand
// @route     GET /feed/brand/:id
// @access    Public
exports.getSingleBrand = async (req, res, next) => {
  try {
    const brand = await Brand.findById(req.params.id.trim());

    if (!brand) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: brand });
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "valid",
    });
  }
};

// @desc      Follow an influencer as an user
// @route     POST /feed/influencer/:id
exports.postFollow = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const influencerId = req.params.id;

    const influencer = await Influencer.findById(influencerId);
    const user = await User.findById(userId);

    if (!influencer || !user) {
      return res.status(404).json({ message: "Influencer or user not found" });
    }

    // Kullanıcı influencer'ı takip ediyor mu?
    const isFollowing = influencer.followers.includes(userId);

    if (!isFollowing) {
      // Takip etmiyorsa, kullanıcıyı takibe ekle
      influencer.followers.push(userId);
      user.following.push(influencerId);
      await influencer.save();
      await user.save();
      res.status(201).json({ message: "Takip edildi" });
    } else {
      // Takip ediyorsa, takipten çıkar
      influencer.followers.pull(userId);
      user.following.pull(influencerId);
      await influencer.save();
      await user.save();
      res.status(201).json({ message: "Takipten çıkıldı" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// @desc      Follow an influencer as an user
// @route     POST /feed/serie/:id
exports.postSubsSerie = async (req, res, next) => {
  try {
    const userId = req.body.userId;

    if (!userId) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const serie = await Serie.findById(req.params.id);
    const user = await User.findById(userId);

    if (!user || !serie) {
      return res.status(404).json({ message: "User or serie not found" });
    }

    user.subseries.push(serie);

    serie.members.push(user);

    await serie.save();
    await user.save();

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error in postSubsSerie:", err);
    next(err);
  }
};

exports.changeProfilePhoto = async (req, res, next) => {
  try {
    const imageUrl = req.files["image"][0].path;

    // Influencer'ı veritabanından bulun
    const influencer = await Influencer.findById(req.params.id);

    if (!influencer) {
      return res
        .status(404)
        .json({ success: false, message: "Influencer not found" });
    }

    // Influencer'ın imageUrl alanını güncelleyin
    influencer.imageUrl = imageUrl;

    // Değişiklikleri kaydedin
    await influencer.save();

    res
      .status(200)
      .json({ success: true, message: "Profile photo updated successfully" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.updateInfluencer = async (req, res, next) => {
  try {
    console.log("sa");
    const influencer = await Influencer.findById(req.params.id);

    console.log(req.body.name);
    influencer.name = req.body.name;
    influencer.surname = req.body.surname;
    influencer.shortDescription = req.body.about;
    const hashedPw = await bcrypt.hash(req.body.password2, 12);
    influencer.password = hashedPw;
    await influencer.save();
  } catch (err) {
    console.log("asdf");
    next(err);
  }
};

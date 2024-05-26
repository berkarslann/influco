const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Influencer = require("../models/influencer");
const Brand = require("../models/brand");

// @desc      Create user (user,influencer,brand)
// @route     POST /auth/signup
exports.signup = async (req, res, next) => {
  try {
    const {
      userType,
      name,
      surname,
      email,
      password,
      wallet,
      shortDescription,
    } = req.body;

    const hashedPw = await bcrypt.hash(password, 12);

    let newUser;

    switch (userType) {
      case "user":
        newUser = new User({
          name,
          surname,
          email,
          password: hashedPw,
          wallet,
        });
        break;
      case "influencer":
        newUser = new Influencer({
          name,
          surname,
          email,
          password: hashedPw,
          shortDescription,
        });
        break;
      case "brand":
        newUser = new Brand({ name, surname, email, password: hashedPw });
        break;
      default:
        return res.status(400).json({ message: "Invalid user type" });
    }

    await newUser.save();

    res.status(201).json({ message: "User saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while saving user" });
    next(error);
  }
};

// @desc      Login user (user,influencer,brand)
// @route     POST /auth/login
exports.login = async (req, res, next) => {
  const { email, password, userType } = req.body;

  try {
    let userModel;

    switch (userType) {
      case "user":
        userModel = User;
        break;
      case "influencer":
        userModel = Influencer;
        break;
      case "brand":
        userModel = Brand;
        break;
      default:
        return res.status(400).json({ message: "Invalid user type" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      const error = new Error("Kullanıcı bulunamadı");
      error.statusCode = 401;
      throw error;
    }

    const isEqual = await bcrypt.compare(password, user.password);

    if (!isEqual) {
      const error = new Error("Yanlış şifre!");
      error.statusCode = 401;
      throw error;
    }

    const accessToken = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
        userType: user.userType,
      },
      "somesupersecretsecret",
      { expiresIn: "1h" }
    );

    res.cookie("token", accessToken).json({
      success: true,
      accessToken,
      userType: user.userType,
      userId: user._id,
      userName: user.name,
    });
  } catch (error) {
    next(error);
  }
};
//@desc Get current user check
//@route GET /current-token
//access Public
exports.currentUserCheck = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    jwt.verify(token, "somesupersecretsecret", async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }
      const userType = decoded.userType;
      console.log("bbbb", userType);
      res.json({ message: true });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//@desc Get current user
//@route GET /current-token
//@access Public
exports.currentUserInfo = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    jwt.verify(token, "somesupersecretsecret", async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }

      const { email, userType } = decoded;

      let userData;
      switch (userType) {
        case "user":
          userData = await User.findOne({ email }).populate("subseries");
          break;
        case "influencer":
          userData = await Influencer.findOne({ email }).populate("series");
          break;
        case "brand":
          userData = await Brand.findOne({ email });
          break;
        default:
          return res.status(400).json({ error: "Invalid user type" });
      }

      res.json({ userData });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

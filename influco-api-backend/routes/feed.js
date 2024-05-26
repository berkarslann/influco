const express = require("express");

const feedController = require("../controllers/feed");
const isAuth = require("../middleware/is-auth");
const isUpload = require("../middleware/is-upload");

const router = express.Router();

//GET Influencers
router.get("/influencer", feedController.getInfluencers);
router.get("/influencer/:id", feedController.getSingleInfluencer);
//change profile photo influencer
router.patch(
  "/influencer/:id",
  isAuth,
  isUpload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 3 },
  ]),
  feedController.changeProfilePhoto
);
router.patch(
  "/influencer-update/:id",
  isAuth,
  isUpload.fields([{ name: "image", maxCount: 1 }]),
  feedController.updateInfluencer
);

//GET Brands
router.get("/brands", feedController.getBrands);
router.get("/brand/:id", feedController.getSingleBrand);

//follow an influencer as an user
router.post("/influencer/:id", feedController.postFollow);

//subscribe to a serie as an user
router.post("/serie/:id", feedController.postSubsSerie);

module.exports = router;

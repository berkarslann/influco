const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//İçerik üreticisiyim, içerik üretmek, markalarla anlaşma yapmak istiyorum..
const influenceSchema = new Schema({
  userType: {
    type: String,
    default: "influencer",
  },

  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  interestArea: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  series: [
    {
      type: Schema.Types.ObjectId,
      ref: "Serie",
    },
  ],

  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
  ],
  impactRate: {
    type: Number,
    default: 0,
  },
  interestArea: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
module.exports = mongoose.model("Influencer", influenceSchema);

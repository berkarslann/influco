const Sentiment = require("sentiment");
const translate = require("@iamtraction/google-translate");

const influencer = require("../models/influencer");

const Influencer = require("../models/influencer");
const Serie = require("../models/serie");
const Post = require("../models/post");
const Comment = require("../models/comment");

exports.analyzeComment = async (req, res, next) => {
    try {
      const influencerId = req.params.id;
      const interaction = await calculateInteraction(influencerId);
      res.status(200).json({
        success: true,
        interaction: interaction,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
  
async function calculateInteraction(influencerId) {
    try {
      const commentDescriptions = await collectComments(influencerId);
  
      const translateComments = async () => {
        const translatedComments = [];
        for (const description of commentDescriptions) {
          try {
            const translation = await translate(description, { to: "en" });
            translatedComments.push(translation.text);
          } catch (error) {
            console.error(`Çeviri hatası: ${error.message}`);
          }
        }
        return translatedComments;
      };
  
      const analyzeSentiment = async () => {
        try {
          const translatedComments = await translateComments();
  
          const sentiment = new Sentiment();
          const sentimentScores = translatedComments.map((description) => {
            const result = sentiment.analyze(description);
            const scaledScore = (result.score + 5) * 10;
            return scaledScore;
          });
  
          const totalSentimentScore = sentimentScores.reduce(
            (sum, score) => sum + score,
            0
          );
          const averageSentimentScore =
            totalSentimentScore / sentimentScores.length;
  
          console.log(
            "0 ile 100 Arasındaki Pozitiflik/Negatiflik Puanı (Türkçe):",
            averageSentimentScore
          );
  
          return averageSentimentScore; // Sentiment analizi sonucunu döndür
        } catch (error) {
          console.error(`Sentiment analizi hatası: ${error.message}`);
          throw error; // Hata durumunda hatayı tekrar fırlat
        }
      };
  
      const result = await analyzeSentiment();
      return result;
    } catch (err) {
      console.error(err);
      throw err; // Hata durumunda hatayı tekrar fırlat
    }
  }
  

async function collectComments(influencerId) {
  try {
    const influencer = await Influencer.findById(influencerId);

    if (!influencer) {
      throw new Error("Influencer bulunamadı.");
    }

    const postIds = influencer.posts.map((post) => post._id);
    console.log(postIds);
    const posts = await Post.find({ _id: { $in: postIds } });
    console.log(posts);
    const comments = [];
    posts.forEach((post) => {
      if (post.comments && Array.isArray(post.comments)) {
        comments.push(...post.comments);
      }
    });

    const commentIds = comments.map((comment) => comment._id);

    const commentDocuments = await Comment.find({ _id: { $in: commentIds } });

    const commentDescriptions = commentDocuments.map(
      (comment) => comment.description
    );

    console.log('commentDescriptions:',  commentDescriptions);
    return commentDescriptions;
  } catch (err) {
    console.error(err);
  }
}
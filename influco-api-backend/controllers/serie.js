const Influencer = require("../models/influencer");
const Serie = require("../models/serie");
const Video = require("../models/video");

exports.getSingleSerie = async (req, res, next) => {
  try {
    const serieId = req.params.id;
    const serie = await Serie.findById(serieId).populate("influencer");

    if (!serie) {
      return res
        .status(404)
        .json({ success: false, message: "Seri bulunamadı" });
    }

    res.status(200).json({ serie });
  } catch (err) {
    console.log(err);
    // Hata yakalandığında uygun bir işlem yapılmalıdır, örneğin hata yanıtı göndermek veya loglamak.
    res.status(500).json({ success: false, message: "Bir hata oluştu" });
  }
};

// @desc      Post serie
// @route     POST /serie/
exports.postSerie = async (req, res, next) => {
  try {
    req.body.influencer = req.userId; // influencer

    const { name, shortDescription } = req.body;
    const imageUrl = req.files["image"][0].path;

    const videoArray = [];

    for (let i = 1; i <= 2; i++) {
      videoArray.push({
        title: req.body[`videoTitle-${i}`],
        description: req.body[`videoDescription-${i}`],
        videoUrl: req.files["video"][i - 1].path,
      });
    }

    const serie = new Serie({
      influencer: req.body.influencer,
      name: name,
      shortDescription: shortDescription,
      imageUrl: imageUrl,
      videos: videoArray,
    });

    const savedSerie = await serie.save();

    const influencer = await Influencer.findById(req.body.influencer);
    influencer.series.push(savedSerie);
    await influencer.save();

    res.status(201).json({
      message: "Serie created successfully!",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// @desc      Delete serie
// @route     DELETE/serie/:id
exports.deleteSerie = async (req, res, next) => {
  try {
    const serieId = req.params.id;
    const serie = await Serie.findById(req.params.id);

    if (!serie) {
      return next(
        res.status(401).json({ success: false, message: "Seri bulunamadı" })
      );
    }

    const result = await Serie.findByIdAndRemove(serieId);
    const influencer = await Influencer.findById(req.userId);
    influencer.series.pull(serieId);
    await influencer.save();

    res.status(200).json({ message: "Deleted serie." });
  } catch (err) {
    next(err);
  }
};

exports.postSerieVideo = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error("Resim yok");
      error.statusCode = 422;
      throw error;
    }
    const videoUrl = req.file.path;
    const { serieName, title, description } = req.body;
    const video = new Video({
      serie: serieName,
      title: title,
      description: description,
      videoUrl: videoUrl,
    });
    const serie = await Serie.findById(req.body.serie);
    const savedVideo = await video.save();
    serie.videos.push(savedVideo);
    await serie.save();

    res.status(201).json({
      message: "Video created successfully!",
    });
  } catch (err) {
    console.log(err);
  }
};

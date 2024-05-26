const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
// const multer = require('multer')
const dotenv = require("dotenv");
var cors = require("cors");

dotenv.config({ path: "./config/config.env" });

const app = express();


app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/videos", express.static(path.join(__dirname, "videos")));

app.use(cookieParser());
app.use(bodyParser.json()); // application/json
app.use(bodyParser.urlencoded({ extended: true }));

const authRoutes = require("./routes/auth");
const feedRoutes = require("./routes/feed");
const activityRoutes = require("./routes/activity");
const postRoutes = require("./routes/post");
const serieRoutes = require("./routes/serie");
const statsRouter = require("./routes/stats");

app.use("/feed", feedRoutes);
app.use("/auth", authRoutes);
app.use("/activity", activityRoutes);
app.use("/post", postRoutes);
app.use("/serie", serieRoutes);
app.use("/stats", statsRouter);

const PORT = 3000;

mongoose
  .connect("mongodb+srv://berkkarsln:berk1234@cluster0.jkeveaj.mongodb.net/")
  .then((result) => {
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

import React, { useState } from "react";
import {
  StyledDivV1,
  StyledDivV2,
  StyledInput,
  StyledTextArea,
  StyledButtonV1,
  StyledButtonV2,
} from "./styles";
import logo from "../../assets/logo.png";
const SerieAdding = () => {
  const [file, setFile] = useState(null);
  const [serieName, setSerieName] = useState("");
  const [shortdescription, setDescription] = useState("");
  const [image, setImageFile] = useState(null);

  const [videoTitle, setVideoTitle] = useState(null);
  const [videoDescription, setVideoDescription] = useState(null);
  const [video, setVideoFile] = useState(null);

  const [videoFileForm, setVideoFileForm] = useState([]);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImageFile(selectedFile);
  };

  const handleVideoChange = (e) => {
    const selectedVideo = e.target.files[0];
    setVideoFile(selectedVideo);
  };

  const addVideo = (e) => {
    const newVideo = {
      videoTitle,
      videoDescription,
      video,
    };
    setVideoFileForm([...videoFileForm, newVideo]);

    // Ardından video özelliklerini sıfırlayın
    setVideoTitle("");
    setVideoDescription("");
    setVideoFile(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", serieName);
    formData.append("shortDescription", shortdescription);
    formData.append("image", image);
    // formData.append('video', video);
    // VideoFormList isimli bir dizide video bilgileri tutuluyor
    console.log("videoFileForm", videoFileForm);
    videoFileForm.forEach((videoForm, index) => {
      formData.append(`videoTitle-${index + 1}`, videoForm.videoTitle);
      formData.append(
        `videoDescription-${index + 1}`,
        videoForm.videoDescription
      );
      formData.append(`video`, videoForm.video);
    });
  };
  return (
    <div
      className="col-md-6 offset-md-3 mt-1"
      style={{ textAlign: "left", color: "#c4beb4" }}
    >
      <br />
      <h1 style={{ color: "#c4beb4" }}>Create a Serie</h1>
      <hr />
      <form
        acceptCharset="UTF-8"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <StyledDivV2>
          <label
            htmlFor="exampleInputName"
            style={{ color: "#c4beb4", textAlign: "right" }}
          >
            Title
          </label>
          <StyledInput
            type="text"
            name="fullname"
            className="form-control"
            id="exampleInputName"
            required
            onChange={(e) => setSerieName(e.target.value)}
          />
        </StyledDivV2>
        <StyledDivV2>
          <label
            htmlFor="exampleInputEmail1"
            style={{ color: "#c4beb4", textAlign: "right" }}
          >
            Description
          </label>
          <StyledTextArea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></StyledTextArea>
        </StyledDivV2>

        <hr />

        <div className="panel panel-default">
          <div className="panel-heading clearfix">
            <h3 className="panel-title pull-left" style={{ color: "#c4beb4" }}>
              Add image
            </h3>
          </div>
          <StyledDivV2>
            <label className="btn btn-file">
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </label>
            <StyledButtonV2
              type="button"
              className="btn btn-danger"
              onClick={() => setFile(null)}
            >
              Remove the image
            </StyledButtonV2>
          </StyledDivV2>
        </div>

        {file && (
          <StyledDivV2 className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Preview</h3>
            </div>
            <StyledDivV2>
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="img-thumbnail"
                width={"50%"}
                height={"50%"}
              />
            </StyledDivV2>
          </StyledDivV2>
        )}

        <hr />
        <div className="card-body">
          <h3 className="card-title" style={{ color: "#c4beb4" }}>
            Add videos to your series
          </h3>

          <StyledDivV2>
            <label htmlFor="exampleInputName" style={{ color: "#c4beb4" }}>
              Name of the episode
            </label>
            <StyledInput
              type="text"
              name="fullname"
              className="form-control"
              id="exampleInputName"
              required
              onChange={(e) => setVideoTitle(e.target.value)}
            />
          </StyledDivV2>
          <StyledDivV2>
            <label htmlFor="exampleInputEmail1" style={{ color: "#c4beb4" }}>
              Description
            </label>
            <StyledTextArea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => setVideoDescription(e.target.value)}
            ></StyledTextArea>
            <input type="file" accept="video/*" onChange={handleVideoChange} />
          </StyledDivV2>
        </div>
        {video && (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Preview</h3>
            </div>
            <div className="panel-body">
              <video controls width="300" height="200">
                <source src={URL.createObjectURL(video)} type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            </div>
          </div>
        )}

        {videoFileForm.length > 0 && (
          <div className="card-deck">
            <h3>Videos you added to your series:</h3>
            {videoFileForm.map((video, index) => (
              <div className="card" key={index} style={{ margin: "10px" }}>
                <video controls width="100%" height="200">
                  <source
                    src={URL.createObjectURL(video.video)}
                    type="video/mp4"
                  />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
                <div className="card-body">
                  <h5 className="card-title">
                    <i> {index + 1}. video of the serie</i>
                  </h5>
                  <p className="card-text">
                    Name of the episode: {video.videoTitle}
                  </p>
                  <p className="card-text">
                    Description: {video.videoDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <StyledDivV2>
          <StyledButtonV1
            type="submit"
            className="btn btn-secondary"
            onClick={addVideo}
            style={{ margin: "5px" }}
          >
            Add video
          </StyledButtonV1>
        </StyledDivV2>
        <hr />
        <StyledDivV2>
          <StyledButtonV1 type="submit" className="btn btn-secondary">
            Create the serie
          </StyledButtonV1>
        </StyledDivV2>
      </form>
    </div>
  );
};

export default SerieAdding;

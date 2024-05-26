import React, { useState, useEffect } from "react";

import {
  CreatePostContainer,
  PostForm,
  TextArea,
  SubmitButton,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/auth";

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("accessToken") ?? "";
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);


  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  console.log("burasıistediginyer", auth.currentUser._id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      description: description,
      influencerId: auth.currentUser._id,
    };

    try {
      // POST isteği yapılması
      const response = await fetch("http://localhost:3000/post/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(postData),
      });

      // İsteğin başarılı olup olmadığını kontrol etme
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      setDescription("");
      window.location.reload();
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <CreatePostContainer>
      <h2>Create a New Post</h2>
      <PostForm onSubmit={handleSubmit}>
        <TextArea
          type="text"
          placeholder="Enter content"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </PostForm>
    </CreatePostContainer>
  );
};

export default CreatePost;

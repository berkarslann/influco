import React, { useState, useEffect } from "react";
import {
  PostGeneralContainer,
  Description,
  StyledExpandButton,
  PostContainer,
  PostForm,
  TextArea,
  SubmitButton,
  CommentContainer,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/auth";
import { useParams } from "react-router-dom";

const ShowPosts = ({ posts, img }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [descriptions, setDescriptions] = useState(posts.map(() => ""));
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const influencerId = useParams();
  console.log("influencerId", influencerId.influencerId);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSubmit = async (e, index, postId) => {
    e.preventDefault();
    const postData = {
      description: descriptions[index],
      userId: auth.currentUser._id,
      influencerId: influencerId.influencerId,
      postId: postId,
    };

    console.log(postData);
    try {
      const response = await fetch("http://localhost:3000/post/add-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      setDescriptions((prevDescriptions) => {
        const newDescriptions = [...prevDescriptions];
        newDescriptions[index] = "";
        return newDescriptions;
      });
      window.location.reload();
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  console.log(posts);
  return (
    <>
      {posts.map((post, index) => (
        <PostGeneralContainer
          key={index}
          style={{ height: expandedIndex === index ? "40rem" : "auto" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={`http://localhost:3000/${img}`}
              alt="Logo"
              style={{
                borderRadius: "50%",
                width: "10%",
                marginRight: "1rem",
              }}
            />

            <Description>{post.description}</Description>
          </div>
          <StyledExpandButton onClick={() => handleExpand(index)}>
            See the Comments
          </StyledExpandButton>
          {expandedIndex === index && (
            <>
              {post.comments.map((comment, commentIndex) => (
                <CommentContainer key={commentIndex}>
                 
                    <h3>{comment.description}</h3>
                    <h6>{comment.user.name} {comment.user.surname}</h6>
                    <h6>
                      {new Date(comment.createdAt).toLocaleString("tr-TR")}
                    </h6>
              
                </CommentContainer>
              ))}
            </>
          )}

          {auth.currentUser && auth.currentUser.userType === "user" && (
            <PostForm onSubmit={(e) => handleSubmit(e, index, post._id)}>
              <TextArea
                type="text"
                placeholder="Enter content"
                value={descriptions[index]}
                onChange={(e) =>
                  setDescriptions((prevDescriptions) => {
                    const newDescriptions = [...prevDescriptions];
                    newDescriptions[index] = e.target.value;
                    console.log(newDescriptions);
                    return newDescriptions;
                  })
                }
              />
              <SubmitButton type="submit">Submit</SubmitButton>
            </PostForm>
          )}
        </PostGeneralContainer>
      ))}
    </>
  );
};

export default ShowPosts;

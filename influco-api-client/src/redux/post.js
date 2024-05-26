import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

//ACTIONS
export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (influencerId) => {
    try {
      const apiUrl = `http://localhost:3000/post/${influencerId}`;
      const response = await axios.get(apiUrl); // Make the API call
      return response.posts; // Assuming the response contains an array named "posts"
    } catch (err) {
      console.log(err);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {});
  },
});

export default postSlice.reducer;

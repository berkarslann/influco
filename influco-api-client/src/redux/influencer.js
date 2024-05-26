import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
  shortDescription: "",
  followers: "",
  post: "",
  posts: [],
  series: [],
  influencers: [],
  userType: "",
};

//ACTIONS
export const getInfluencer = createAsyncThunk(
  "influencer/getInfluencer",
  async (influencerId) => {
    try {
      const apiUrl = `http://localhost:3000/feed/influencer/${influencerId}`;
      const response = await axios.get(apiUrl);
      console.log("buradan yazıyor", response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const getAllInfluencer = createAsyncThunk(
  "influencer/getAllInfluencer",
  async (_, { rejectWithValue }) => {
    try {
      const apiUrl = `http://localhost:3000/feed/influencer`;
      const response = await axios.get(apiUrl);
      console.log("buradan yazıyor22", response.data.data);
      return response.data.data;
    } catch (err) {
      return rejectWithValue({ success: false, error: err });
    }
  }
);

const influencerSlice = createSlice({
  name: "influencer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getInfluencer.fulfilled, (state, action) => {
      // Thunk işlevi başarıyla tamamlandığında çalışacak kısım
      state.name = action.payload.data.name;
      state.surname = action.payload.data.surname;
      state.imageUrl = action.payload.data.imageUrl;
      state.shortDescription = action.payload.data.shortDescription;
      state.followers = action.payload.followersCount;
      state.post = action.payload.postsCount;
      state.series = action.payload.data.series;
      state.posts = action.payload.data.posts
      state.userType = action.payload.data.userType;
    });
    builder.addCase(getAllInfluencer.fulfilled, (state, action) => {
      state.influencers = action.payload;
    });
  },
});
export default influencerSlice.reducer;

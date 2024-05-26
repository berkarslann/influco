import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  influencer: {},
  name: "",
  shortDescription: "",
  members: [],
  imageUrl: "",
  videos: [],
};

//ACTIONS
export const getSingleSerie = createAsyncThunk(
  "serie/getSingleSerie",
  async (serieId) => {
    try {
      const apiUrl = `http://localhost:3000/serie/${serieId}`;
      const response = await axios.get(apiUrl);
      console.log('buradan yazıyor', response.data.serie);
      return response.data.serie;
    } catch (err) {
      console.log(err);
    }
  }
);

const serieSlice = createSlice({
  name: "serie",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSingleSerie.fulfilled, (state, action) => {
      // Thunk işlevi başarıyla tamamlandığında çalışacak kısım
      state.name = action.payload.name;
      state.shortDescription = action.payload.shortDescription;
      state.imageUrl = action.payload.imageUrl;
      state.videos = action.payload.videos; 
      state.influencer = action.payload.influencer;
      state.error = null;
      state.loggedIn = true;
  
    });
  },
});
export default serieSlice.reducer;

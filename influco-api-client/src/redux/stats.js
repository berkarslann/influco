import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userStats: "",
};

//ACTIONS
export const analyzeComments = createAsyncThunk(
  "stats/analyzeComments",
  async (influencerId) => {
    try {
      const apiUrl = `http://localhost:3000/stats/analyze-comment/${influencerId}`;
      const response = await axios.get(apiUrl, influencerId);

      if (response.status === 200) {
        console.log("burasıdır", response.data.interaction);

        return response.data.interaction;
      } else {
        // Response is unsuccessful, retrieve error message
        console.error("Analiz error:", response.data.message);
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      // Handle any exceptions or errors
      console.log(error);
      throw error;
    }
  }
);

const statsSlice = createSlice({
  name: "stats",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(analyzeComments.fulfilled, (state, action) => {
      // Thunk işlevi başarıyla tamamlandığında çalışacak kısım
      state.userStats = action.payload; // veya action.payload doğrudan interactions ise bu şekilde atama yapılabilir
    });
  },
});
export default statsSlice.reducer;

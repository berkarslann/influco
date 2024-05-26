import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  accessToken: null,
  error: null,
  loggedIn: false,
  currentUser: [],
  user: undefined,
  userType: undefined,
};

//ACTIONS
export const loginUser = createAsyncThunk("auth/loginUser", async (form) => {
  try {
    const apiUrl = "http://localhost:3000/auth/login";
    const response = await axios.post(apiUrl, form)

    if (response.status === 200) {
      console.log('burda')
      const accessToken = response.data.accessToken;
      const userType = response.data.userType
      
      return { success: true, accessToken,userType };
    } else {
      // Response is unsuccessful, retrieve error message
      console.error("Login failed:", response.data.message);
      return { success: false, error: response.data.message };
    }
  } catch (error) {
    // Handle any exceptions or errors
    console.log(error)
    throw error;
  }
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (form) => {
    try {
      const apiUrl = "http://localhost:3000/auth/signup";

      // Make a POST request to the API with form data using Axios
      const response = await axios.post(apiUrl, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        const user = response.data.newUser;

        return { success: true, accessToken, user };
      } else {
        // Response is unsuccessful, retrieve error message
        console.error("Register failed:", response.data.message);
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      // Handle any exceptions or errors
      throw error;
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentuser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken") ?? "";
      const apiUrl = "http://localhost:3000/auth/check-user-info";
      const response = await axios.get(apiUrl, {
        headers:{
          'Authorization': token
        }
      });
      console.log('berk',response.data)
      return response.data;
    } catch (err) {
      return rejectWithValue({ success: false, error: err });
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("accessToken");
});


const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        // Thunk işlevi başarıyla tamamlandığında çalışacak kısım
        state.accessToken = action.payload.accessToken;
        state.userType = action.payload.userType;
        state.error = null;
        state.loggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.accessToken = null;
        state.loggedIn = false;
        console.log(action.error.message);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // Thunk işlevi başarıyla tamamlandığında çalışacak kısım
        state.accessToken = action.payload.accessToken;
        state.error = null;
        state.loggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.accessToken = null;
        state.loggedIn = false;
        console.log(action.error.message);
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload.userData;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.currentUser = undefined;
      });
  },
});

export default authSlice.reducer;

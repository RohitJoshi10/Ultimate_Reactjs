import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false, // It means that user is not authenticated yet
  userData: null, // Initially i have no userData
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },

    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

// action se hume payload milta hai

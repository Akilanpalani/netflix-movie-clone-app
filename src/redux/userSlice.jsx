import { createSlice } from '@reduxjs/toolkit';

const useSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: null,
    isAuthenticated: false,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
      state.isAuthenticated = true;
    },
    login: (state, action) => {
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.userDetails = null;
    },
  },
});

export const { setUserDetails, login, logout } = useSlice.actions;

export const selectUserDetails = (state) => state.user.userDetails;
export const selectAuthenticated = (state) => state.user.isAuthenticated;

export default useSlice.reducer;

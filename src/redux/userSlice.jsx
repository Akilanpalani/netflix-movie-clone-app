import { createSlice } from '@reduxjs/toolkit';

const useSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: null,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
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

export default useSlice.reducer;

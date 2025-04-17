import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNav: "home",
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setActiveNav: (state, action) => {
      state.activeNav = action.payload;
    },
  },
});

export const { setActiveNav } = navbarSlice.actions;
export default navbarSlice.reducer;
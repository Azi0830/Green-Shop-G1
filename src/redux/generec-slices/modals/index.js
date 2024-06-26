import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    categoryModal: false,
    authModal: false,
    navbarModal: false,
  },
  reducers: {
    setCategoryModal: (state) => {
      state.categoryModal = !state.categoryModal;
    },
    setAuthModal: (state) => {
      state.authModal = !state.authModal;
    },
    setNavbarModal: (state) => {
      state.navbarModal = !state.navbarModal;
    },
  },
});

export default modal.reducer;
export const { setCategoryModal, setAuthModal, setNavbarModal } = modal.actions;

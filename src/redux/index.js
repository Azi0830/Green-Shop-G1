import { configureStore } from "@reduxjs/toolkit";
import modal from "./generec-slices/modals";

export default configureStore({
  reducer: {
    modal,
  },
});

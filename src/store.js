import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/account/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

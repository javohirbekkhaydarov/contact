import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./ContactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

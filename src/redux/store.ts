import { configureStore } from "@reduxjs/toolkit";

import { riddlerReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    riddler: riddlerReducer
  }
});

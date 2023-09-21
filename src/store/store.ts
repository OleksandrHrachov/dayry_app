import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import { saveToLocalStorage } from '../utils/helpers';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState().items);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

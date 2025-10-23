import { configureStore } from '@reduxjs/toolkit';
import { RoomCategorySlice } from './RoomCategorySlice';
export const store = configureStore({
  reducer: {
    RoomCategoryData: RoomCategorySlice.reducer,
  },
});

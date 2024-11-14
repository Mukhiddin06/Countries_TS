import { configureStore } from "@reduxjs/toolkit";
import SaveSlice from "./SaveSlice"
export const store = configureStore({
    reducer:SaveSlice
})

export type RootState = ReturnType<typeof store.getState>;
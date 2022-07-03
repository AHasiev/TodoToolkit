import { configureStore } from "@reduxjs/toolkit";
import addReducer from "../feature/addReducer";


export const store = configureStore({
    reducer: addReducer
});
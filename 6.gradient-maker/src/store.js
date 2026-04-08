import { configureStore } from "@reduxjs/toolkit";
import  gradient  from "/src/feautures/gradient";

export const store = configureStore({
    reducer: {
        gradient
    }
})
import { configureStore } from '@reduxjs/toolkit'
import chrono from "./features/chrono.js"


export const store = configureStore({
    reducer : {
        chrono
    }
})
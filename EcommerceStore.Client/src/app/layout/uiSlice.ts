import {createSlice} from "@reduxjs/toolkit";


export const uiSlice = createSlice({
    name:"ui",
    initialState: {
        isLoading: false
    },
    reducers: {
        startLoading(state)
    }
})
import { createSlice } from "@reduxjs/toolkit";
import { MoviesProcess } from "../../types/state";
import { NameSpace } from "../../utils/const";
import { fetchUserWatchHistory } from "./moviesActions";


const initialState: MoviesProcess = {
    watchHistory: [],
    isWhatchHistoryLoading: false
}

export const moviesProcess = createSlice({
    name: NameSpace.Movies,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchUserWatchHistory.pending, (state) => {
            state.isWhatchHistoryLoading = true;
        })
        .addCase(fetchUserWatchHistory.fulfilled, (state, action) => {
            state.isWhatchHistoryLoading = false;
            state.watchHistory = action.payload;
        })
        .addCase(fetchUserWatchHistory.rejected, (state) => {
            state.isWhatchHistoryLoading = false;
        } )
    },
})
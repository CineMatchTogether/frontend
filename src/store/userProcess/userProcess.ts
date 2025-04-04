import { createSlice } from "@reduxjs/toolkit";
import { UserProcess } from "../../types/state";
import { AuthorizationStatus, NameSpace } from "../../utils/const";
import { refreshAction } from "./userActions";


const initialState: UserProcess = {
    user: {
        id: '',
        username: '',
        email: '',
        roles: []
    },
    isUserDataLoading: false,
    authorizationStatus: AuthorizationStatus.Unknown
}

export const userProcess = createSlice({
    name: NameSpace.User,
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder
        .addCase(refreshAction.fulfilled, (state, action) => {
            state.authorizationStatus = AuthorizationStatus.Auth;
            state.user = action.payload;
        })
        .addCase(refreshAction.rejected, (state) => {
            state.authorizationStatus = AuthorizationStatus.NoAuth;
        })
    }
})
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthControllerService, UserDto } from "../../apis/core-api";

export const refreshAction = createAsyncThunk<UserDto, void>(
  "user/refresh",
  async () => {
    return AuthControllerService.refreshtoken();
  }
);

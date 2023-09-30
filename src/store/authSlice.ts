import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/User";

export interface AuthCredentials {
  email: string;
  password: string;
}

const initialState: User = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    join: (state, action: PayloadAction<AuthCredentials>) => {},
    signin: (state, action: PayloadAction<AuthCredentials>) => {},
  },
});

export const { join, signin } = authSlice.actions;

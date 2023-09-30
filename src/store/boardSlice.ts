import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../models/Board";

const initialState: Board[] = [];

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

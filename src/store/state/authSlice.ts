import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  value: number;
}

const initialState: AuthState = {
  value: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: (state) => {},
  },
});

export default authSlice.reducer;

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  email: null | string;
  loggedInState: boolean;
}

const initialState: UserState = {
  email: null,
  loggedInState: false,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.loggedInState = true;
    },
    logout: (state) => {
      state.email = null;
      state.loggedInState = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

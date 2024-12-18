import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string | null;
  loggedInState: boolean;
}

const initialState: UserState = {
  email: null,
  loggedInState: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
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

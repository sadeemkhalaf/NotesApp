import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface LanguageState {
  language: 'ar' | 'en';
}

const initialState: LanguageState = {
  language: 'en',
};

const languageSlice = createSlice({
  initialState,
  name: 'language',
  reducers: {
    setLanguage: (state, action: PayloadAction<'ar' | 'en'>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

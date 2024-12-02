import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface themeSlice {
  theme: 'light' | 'dark'
}
const initialState: themeSlice = {
  theme: 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeChange: (state) => {
      state.theme = state.theme=='dark'  ? 'light' : 'dark'
    },
  },
})
// Action creators are generated for each case reducer function
export const {themeChange} = themeSlice.actions

export default themeSlice.reducer
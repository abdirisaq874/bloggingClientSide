import { createSlice } from '@reduxjs/toolkit';

const themes = {
  winter: 'winter',
  dracula: 'dracula',
};
// const getUserFromLocalStorage = () => {
//   return JSON.parse(localStorage.getItem('user')) || null;
// };

const initialState = {
  UserInfo: null,
  isLoggedIn:
    typeof window !== 'undefined'
      ? localStorage.getItem('isLoggedIn') || false
      : false,
  // get theme from local storage
  theme:
    typeof window !== 'undefined'
      ? localStorage.getItem('theme')
        ? localStorage.getItem('theme')
        : 'light'
      : 'light',
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SetFormData(state, action) {
      state.UserInfo = action.payload.UserInfo;
      state.isLoggedIn = action.payload.isLoggedIn;
      localStorage.setItem('user', JSON.stringify(state.UserInfo));
      localStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
    },
    toggleTheme: (state) => {
      const { dracula, winter } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export default usersSlice.reducer;
export const { SetFormData, toggleTheme } = usersSlice.actions;

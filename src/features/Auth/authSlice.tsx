import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: {
    first_name: string;
    last_name: string;
    email: string;
  } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string; token: string }>) => {
      state.isAuthenticated = false;
      state.token = action.payload.token;
      state.user = { first_name: '', last_name: '', email: action.payload.email };
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem('token');
    },
    register: (state, action: PayloadAction<{ first_name: string; last_name: string; email: string; token: string }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload;
      localStorage.setItem('token', action.payload.token);
    },
  },
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;
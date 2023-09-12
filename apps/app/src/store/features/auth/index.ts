import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  userInfo: {
    firstname: '',
    lastname: '',
    phone: '',
    password: '',
    accountType: '',
    photo: '',
    interests: {},
  },
  isLoading: true,
  isSignout: false,
};

export const UserKey = 'user';

const loginUser = async (action: any) => {
};

let state: any = {};

export const isSignedIn = () => {
};

state = state || initialState;

const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    restoreToken: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    saveUserInfo: (state, action) => {
      state.userInfo = {...state.userInfo, ...action.payload};
    },
    signin: (state, action) => {
      state.isSignout = false;
      state.user = action.payload;
      loginUser(action.payload);
    },
    signout: state => {
      state.isSignout = true;
      state.user = null;
    },
  },
});

export const {restoreToken, saveUserInfo, signin, signout} = authSlice.actions;
export default authSlice.reducer;
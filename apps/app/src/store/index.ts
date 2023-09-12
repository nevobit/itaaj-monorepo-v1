import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import authReducer from './features/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
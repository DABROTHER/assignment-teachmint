import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import expireReducer from 'redux-persist-expire';
const persistConfig = {
  key: 'root',
  storage,
  transforms: [expireReducer('root', { expireSeconds: 10 * 60 * 60 })],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

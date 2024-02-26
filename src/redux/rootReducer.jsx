import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import useReducer from './userSlice';

const persistConfig = {
  key: 'user',
  storage,
};

const rootReducer = combineReducers({
  user: useReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import dragonsReducer from './dragons/dragonsSlice';

const rootReducer = {
  dragons: dragonsReducer,
  missions: missionsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

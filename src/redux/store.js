import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';

const rootReducer = {

  missions: missionsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

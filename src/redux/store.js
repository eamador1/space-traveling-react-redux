import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';

  missions: missionsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
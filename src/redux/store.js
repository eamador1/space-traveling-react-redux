import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const rootReducer = {
  rockets: rocketsReducer,

  missions: missionsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';
import dragonsReducer from './dragons/dragonsSlice';

const rootReducer = {
  rockets: rocketsReducer,

  missions: missionsReducer,
  dragons: dragonsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

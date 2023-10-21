import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './redux/missions/missionsSlice';
import rocketsReducer from './redux/rockets/rocketsSlice';
import dragonsReducer from './redux/dragons/dragonsSlice';

const rootReducer = {
  rockets: rocketsReducer,

  missions: missionsReducer,
  dragons: dragonsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

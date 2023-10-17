import { createSlice } from '@reduxjs/toolkit';

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: { missions: [], loading: false },
  reducers: {
    leaveMission: (state, action) => {
      const mission = state.missions.find((mission) => mission.mission_id === action.payload);
      if (mission) {
        mission.reserved = false;
      }
    },
    reserveMission: (state, action) => {
      const mission = state.missions.find((mission) => mission.mission_id === action.payload);
      if (mission) {
        mission.reserved = true;
      }
    },
  },

});

export const { reserveMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;

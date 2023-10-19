import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  return response.data.map((rocket) => ({
    rocket_id: rocket.id,
    rocket_name: rocket.name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
});
export const cancelReserveRocket = createAsyncThunk('rockets/cancelReserveRocket', async (rocketId) => rocketId);

export const setSelectedRocket = createAsyncThunk('rockets/setSelectedRocket', async (rocketData) => rocketData);

const initialState = [];

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
    builder.addCase(setSelectedRocket.fulfilled, () => {

    });
    builder.addCase(cancelReserveRocket.fulfilled, () => {

    });
  },
});

export default rocketsSlice.reducer;

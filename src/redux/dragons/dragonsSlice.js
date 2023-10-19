import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const DRAGON_URL = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await axios.get(DRAGON_URL);
  return response.data.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    description: dragon.description,
    flickr_images: dragon.flickr_images,
    reserved: false,
  }));
});

export const setSelectedDragon = createAsyncThunk('dragons/setSelectedDragon', async (dragonData) => dragonData);
const initialState = [];

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.fulfilled, (state, action) => action.payload);
    builder.addCase(setSelectedDragon.fulfilled, (state, action) => {
      const selectedDragonId = action.payload.dragon_id;
      return state
        .map((dragon) => (dragon.dragon_id === selectedDragonId
          ? { ...dragon, reserved: true } : dragon));
    });
  },
});

export default dragonsSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const DRAGON_URL = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  try {
    const { data } = await axios.get(DRAGON_URL);
    return data.map((dragon) => ({
      id: dragon.dragon_id,
      name: dragon.dragon_name,
      type: dragon.dragon_type,
      flickr_images: dragon.flickr_images,
    }));
  } catch (error) {
    throw new Error('Error fetching dragons from the API');
  }
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    dragons: [],
    status: 'idle',
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = action.payload;
      })
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dragonsSlice.reducer;

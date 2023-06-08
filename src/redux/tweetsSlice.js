import { createSlice } from '@reduxjs/toolkit';
import { fetchUserProfiles} from './operations';

const initialState = {
  usersProfiles: [],
};

const usersProfilesSlice = createSlice({
  name: 'usersProfiles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserProfiles.fulfilled, (state, { payload }) => {
        state.usersProfiles = payload;
      })
      .addCase(fetchUserProfiles.rejected, (state, { payload }) => {})
  },
});

export const usersProfilesReducer = usersProfilesSlice.reducer;
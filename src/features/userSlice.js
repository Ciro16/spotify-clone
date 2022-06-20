import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    user: null,
    playlist: null,
    tracks: null,
  },
  reducers: {
    SET_TOKEN: (state, action) => {
      state.token = action.payload;
    },
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
    SET_PLAYLIST: (state, action) => {
      state.playlist = action.payload;
    },
    SET_TRACKS: (state, action) => {
      state.tracks = action.payload;
    },
  },
});

export const { SET_USER, SET_TOKEN, SET_PLAYLIST, SET_TRACKS } =
  userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectPlaylist = (state) => state.user.playlist;
export const selectTracks = (state) => state.user.tracks;

export default userSlice.reducer;

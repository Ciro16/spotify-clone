import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    user: null,
    playlist: null,
    tracks: null,
    tracksOriginal: null,
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
    SET_TRACKSORIGINAL: (state, action) => {
      state.tracksOriginal = action.payload;
    },
  },
});

export const {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLIST,
  SET_TRACKS,
  SET_TRACKSORIGINAL,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectPlaylist = (state) => state.user.playlist;
export const selectTracks = (state) => state.user.tracks;
export const selectTracksOriginal = (state) => state.user.tracksOriginal;

export default userSlice.reducer;

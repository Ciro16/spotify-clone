import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";

import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  SET_USER,
  SET_PLAYLIST,
  SET_TRACKS,
  SET_TRACKSORIGINAL,
} from "./features/userSlice";

import { getTokenFromURL } from "./spotifyLogin";

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenURL = getTokenFromURL();

    if (tokenURL === null) return;

    spotify.setAccessToken(tokenURL);
    spotify.getMe().then((user) => {
      dispatch(SET_USER(user));

      //Obtenemos los playlist
      spotify.getUserPlaylists().then((res) => {
        if (res.items.length !== 0) {
          dispatch(SET_PLAYLIST(res.items[0]));

          //Obtenemos los tracks
          fetch(
            "https://api.spotify.com/v1/playlists/6fPoRfgvK0GQb6pzVc7iSC/tracks",
            {
              headers: {
                Authorization: `Bearer ${tokenURL}`,
              },
            }
          )
            .then((res) => res.json())
            .then((tracks) => {
              dispatch(SET_TRACKS(tracks.items));
              dispatch(SET_TRACKSORIGINAL(tracks.items));
            });
        }
      });
    });
  }, [dispatch]);

  return <div className="app">{user ? <Player /> : <Login />}</div>;
}

export default App;

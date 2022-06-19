import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";

import { getTokenFromURL } from "./spotifyLogin";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(getTokenFromURL());
    window.location.hash = "";
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;

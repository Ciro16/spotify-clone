import Body from "../Body";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

import { SpotifyBody } from "./styles";

const Player = () => {
  return (
    <>
      <SpotifyBody>
        <Sidebar />
        <Body />
      </SpotifyBody>
      <Footer />
    </>
  );
};

export default Player;

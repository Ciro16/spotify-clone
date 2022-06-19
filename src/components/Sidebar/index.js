import { SidebarContainer } from "./styles";
import { Playlist } from "./styles";

import SidebarChoice from "./SidebarChoice";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="logo"
      />
      <SidebarChoice title="Home" Icon={HomeIcon} />
      <SidebarChoice title="Search" Icon={SearchIcon} />
      <SidebarChoice title="Your Library" Icon={LibraryMusicIcon} />
      <Playlist>PLAYLIST</Playlist>
      <hr />

      <SidebarChoice title="2022 - Chillout Music" />
      <SidebarChoice title="Dark Metal" />
    </SidebarContainer>
  );
};

export default Sidebar;

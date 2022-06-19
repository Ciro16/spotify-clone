import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";

import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, songs, of other" />
      </HeaderLeft>

      <HeaderRight>
        <Avatar />
        <h4>Ciroperez</h4>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

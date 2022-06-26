import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";

import { selectUser, SET_SEARCH_TRACK } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handelChange = (e) => {
    dispatch(SET_SEARCH_TRACK(e.target.value));
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <SearchIcon />
        <input
          type="search"
          placeholder="Search for Artists, songs, of other"
          onChange={handelChange}
        />
      </HeaderLeft>

      <HeaderRight>
        <Avatar src={user?.images[0]?.url} className="avatar" />
        <h4>{user?.display_name}</h4>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

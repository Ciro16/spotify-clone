import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";

import {
  selectUser,
  selectTracks,
  selectTracksOriginal,
  SET_TRACKS,
} from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

const Header = () => {
  const user = useSelector(selectUser);
  const tracks = useSelector(selectTracks);
  const tracksOriginal = useSelector(selectTracksOriginal);

  const dispatch = useDispatch();

  const handelChange = (e) => {
    if (e.target.value === "") {
      dispatch(SET_TRACKS(tracksOriginal));
      return;
    }

    const filterTracks = tracks.filter(
      (item) => item.track.name.search(e.target.value) !== -1
    );

    dispatch(SET_TRACKS(filterTracks));
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
        <Avatar src={user?.images[0]?.url} />
        <h4>Ciroperez</h4>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

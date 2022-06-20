import { BodyContainer, Icons, Info, InfoText, Songs } from "./styles";

import { selectPlaylist, selectTracks } from "../../features/userSlice";
import { useSelector } from "react-redux";

import Header from "../Header";
import SongRow from "./SongRow";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";

const Body = () => {
  const playlist = useSelector(selectPlaylist);
  const tracks = useSelector(selectTracks);
  console.log(tracks);

  return (
    <BodyContainer>
      <Header />
      <Info>
        <img src={playlist?.images[0]?.url} alt="" />
        <InfoText>
          <h4> PLAYLIST </h4>
          <h2> Discover Weekly </h2>
          <p> {playlist?.name} </p>
        </InfoText>
      </Info>

      <Songs>
        <Icons>
          <PlayCircleFilled className="playButton" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </Icons>

        {tracks &&
          tracks.map((item, index) => (
            <SongRow track={item.track} key={index} />
          ))}
      </Songs>
    </BodyContainer>
  );
};

export default Body;

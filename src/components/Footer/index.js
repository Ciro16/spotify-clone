import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import {
  FooterContainer,
  FooterLeft,
  FooterCenter,
  FooterRight,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img
          src="https://static.posters.cz/image/750/buque-costero/coldplay-parachutes-album-cover-i56853.jpg"
          alt="cover"
        />
        <div>
          <h4>Shape of my Heart</h4>
          <p> Sting</p>
        </div>
      </FooterLeft>

      <FooterCenter>
        <Shuffle />
        <SkipPrevious />
        <PlayCircleOutline />
        <SkipNext />
        <Repeat />
      </FooterCenter>

      <FooterRight>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;

import { LoginContainer, LoginButton } from "./styles";

const endpoint = `https://accounts.spotify.com/authorize?`;
const clientID = "ecdd12bdcb9748aca2e98e41ba2f2df1";
const redirectURI = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

const loginURL = `${endpoint}client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;

const Login = () => {
  return (
    <LoginContainer>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="Spotify logo"
      />
      <LoginButton href={loginURL}>Login with Spotify</LoginButton>
    </LoginContainer>
  );
};

export default Login;

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

const getTokenFromURL = () => {
  const url = new URL(window.location.href.replace(/#/g, "?"));
  const access_token = url.searchParams.get("access_token");

  return access_token;
};

export { loginURL, getTokenFromURL };

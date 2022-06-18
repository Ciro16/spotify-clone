import { LoginContainer, LoginButton } from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="Spotify logo"
      />
      <LoginButton href="#">Login with Spotify</LoginButton>
    </LoginContainer>
  );
};

export default Login;

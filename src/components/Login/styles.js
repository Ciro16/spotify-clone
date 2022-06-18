import styled from "styled-components";

const LoginContainer = styled.div`
  height: 100vh;
  background-color: #000;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & img {
    width: 100%;
  }
`;

const LoginButton = styled.a`
  padding: 20px;
  background-color: #1db954;
  border-radius: 90px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bolder;
`;

export { LoginContainer, LoginButton };

import styled from "styled-components";

const BodyContainer = styled.div`
  flex: 0.8;
  background: linear-gradient(#340034, black);
  color: white;
  height: 100vh;
  padding: 30px;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;

  & img {
    width: 15vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px black;
  }
`;

const InfoText = styled.div`
  flex: 1;

  & h1 {
    margin-bottom: 10px;
  }
`;

const Songs = styled.div`
  margin: 20px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  & .MuiSvgIcon-root {
    margin-right: 20px;
  }

  & .playButton {
    margin: 20px 15px 20px 50px;
    transition: transform 200ms ease-in-out;
  }

  & .playButton:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const SongRowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-top: 15px;
  z-index: 90;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }

  & img {
    height: 50px;
    width: 50px;
    object-fit: contain;
  }
`;

const SongInfo = styled.div`
  margin-left: 20px;

  & p {
    margin-top: 3px;
    color: lightgray;
  }
`;

export {
  BodyContainer,
  Info,
  InfoText,
  Songs,
  Icons,
  SongRowContainer,
  SongInfo,
};

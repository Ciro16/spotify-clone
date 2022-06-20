import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: #181818;
  color: white;

  display: flex;
  justify-content: space-between;
`;

const FooterLeft = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  max-width: 300px;

  & img {
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
  }
`;

const FooterCenter = styled.div`
  width: 40%;
  max-width: 300px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & .shuffle,
  .repeat {
    color: #00ff00;
    transition: transform 300ms ease-in-out;
  }

  & .icon {
    transition: transform 300ms ease-in-out;
  }

  & .shuffle:hover,
  .repeat:hover,
  .icon:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

const FooterRight = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 35px;

  & .MuiSlider-root {
    color: #00ff00;
  }
`;

export { FooterContainer, FooterLeft, FooterCenter, FooterRight };

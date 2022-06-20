import styled from "styled-components";

const SidebarContainer = styled.div`
  flex: 0.2;
  height: 740px;
  background-color: black;
  min-width: 240px;
  color: white;

  & img {
    height: 70px;
    padding: 10px;
    margin-right: auto;
  }

  & hr {
    border: 1px solid whitesmoke;
    width: 90%;
    margin: 10px auto;
  }
`;

const Playlist = styled.div`
  margin: 5px 10px;
`;

const Choices = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: gray;
  height: 40px;
  transition: 300ms color ease-in;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export { SidebarContainer, Playlist, Choices };

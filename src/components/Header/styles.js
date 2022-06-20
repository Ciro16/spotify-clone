import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  flex: 0.5;
  min-width: 75px;
  background-color: white;
  color: #181818;
  border-radius: 30px;
  padding: 10px;

  & input {
    border: none;
    width: 100%;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  & h4 {
    margin-left: 15px;
  }
`;

export { HeaderContainer, HeaderLeft, HeaderRight };

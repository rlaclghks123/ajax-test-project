import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 150px;
  background-color: #d5d6d7;

  button {
    padding: 15px;
    border: none;
    margin: 50px 0px;

    &:first-child {
      background-color: beige;
    }
    &:last-child {
      background-color: bisque;
    }
  }
`;

function Home() {
  return (
    <Wrapper>
      <Box>
        <Link to="/join">
          <button>회원가입</button>
        </Link>
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </Box>
    </Wrapper>
  );
}

export default Home;

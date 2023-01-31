import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Notification from './Notificaltion.js';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  width: 45%;
  height: 50%;
  justify-content: center;

  button {
    background-color: white;
    box-shadow: 0 0 2px;
    width: 100%;
    height: 100%;
    padding: 150px;
    border-radius: 15px;
    font-size: 30px;
    border: none;
  }
`;

function Home() {
  const loggedIn = sessionStorage.getItem('loggedIn');
  return (
    <Wrapper>
      {loggedIn ? (
        <>
          <Notification></Notification>
          <div>홈 화면입니다</div>
        </>
      ) : (
        <>
          <Box>
            <Link to="/join">
              <button>회원가입</button>
            </Link>
          </Box>
          <Box>
            <Link to="/login">
              <button>로그인</button>
            </Link>
          </Box>
        </>
      )}
    </Wrapper>
  );
}

export default Home;

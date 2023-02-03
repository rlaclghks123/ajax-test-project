import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.ul`
  width: 100%;
  margin-top: 5%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  a {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0px 50px;
    color: black;
    text-decoration: none;
    border-right: 1px solid rgba(0, 0, 0, 0.1);

    li {
      padding: 20px;
    }
  }
`;

function Notification() {
  const sessionId = sessionStorage.getItem('sessionId');
  return (
    <Wrapper>
      <Link to="/">
        <li>홈</li>
      </Link>
      <Link to={`/purchase/${sessionId}`}>
        <li>결제</li>
      </Link>
      <Link to="/kakaoMap">
        <li>카카오 지도</li>
      </Link>
    </Wrapper>
  );
}

export default Notification;

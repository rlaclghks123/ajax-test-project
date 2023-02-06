import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Notification from './Notificaltion.js';
import { useNavigate } from 'react-router';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
`;

const Main = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 10%;
  display: flex;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    button {
      padding: 20px 80px;
      background-color: #2ac1bc;
      border: none;
      color: white;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  &:last-child {
    display: flex;
    flex-direction: column;
    div {
      margin: 50px 0px;
    }
  }
`;

const Badge = styled.div`
  padding: 5px;
  width: 22px;
  font-size: 12px;
  border-radius: 11px;
  color: rgba(0, 0, 0, 0.7);
  border: ${(props) => `1px solid ${props.gradeColor}`};
  // 브론즈 #947766
  // 플래  #578085
  // 마스터 #E15FF7
  // 챌린저 #93F6FE
`;

function Purchase() {
  const sessionId = sessionStorage.getItem('sessionId');
  const loggedIn = sessionStorage.getItem('loggedIn');

  const [count, setCount] = useState(0);
  const [grade, setGrade] = useState('#947766');

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/purchase/${sessionId}`)
      .then((response) => {
        setCount(response.data.count);
      })
      .catch((error) => {
        alert(error.response.data.error);
        navigate('/ajax-test-project');
        return;
      });
  }, [navigate, sessionId, count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/purchase/${sessionId}`, {
        id: sessionId,
        status: true,
      })
      .then((response) => {
        if (response.status === 200) {
          alert(response.data.message);
        }
        navigate('/ajax-test-project');
        return;
      })
      .catch((error) => {
        alert(error.response.data.error);
        navigate('/ajax-test-project');
        return;
      });
  };

  useEffect(() => {
    if (count <= 1) {
      setGrade('#947766');
    } else if (count <= 3) {
      setGrade('#578085');
    } else if (count <= 5) {
      setGrade('#E15FF7');
    } else {
      setGrade('#93F6FE');
    }
  }, [count]);

  return (
    <Wrapper>
      <Notification />
      {loggedIn ? (
        <Main>
          <Box>
            <form method="POST" onSubmit={handleSubmit}>
              <button type="submit">결제하기</button>
            </form>
          </Box>
          <Box>
            <Badge gradeColor={grade}>단골</Badge>
            <div>총 주문횟수 : {count}</div>
          </Box>
        </Main>
      ) : (
        <div>잘못된 접근입니다. 홈에서 로그인 먼저 해주세요</div>
      )}
    </Wrapper>
  );
}

export default Purchase;

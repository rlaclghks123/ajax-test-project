import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 120px;
  box-sizing: border-box;
  background-color: #efefef;
`;

const Ul = styled.ul`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-content: center;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1px;
    width: 50%;

    button {
      width: 100%;
      height: 100%;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      &:first-child {
        border-right: 1px solid rgba(0, 0, 0, 0.1);
      }

      :disabled {
        color: black;
        border-top: 2px solid black;
        border-bottom: none;
      }
      :not(:disabled) {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

const Main = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 30px;
  height: 80%;
  margin: 20px 0px;
`;

const User = styled.ul`
  width: 100%;
  height: 20%;
  display: flex;

  li {
    display: flex;
    align-items: center;

    &:first-child {
      width: 10%;
      div {
        background-color: #bdc3c7;
        width: 55%;
        height: 65%;
        border-radius: 50%;
      }
    }

    &:nth-child(2) {
    }
  }
`;

const Review = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 60%;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const UserNotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 10px;
  justify-content: center;
  position: relative;
  svg {
    bottom: 0px;
    width: 12px;
    height: 12px;
    fill: #ffd404;
  }
`;

const Badge = styled.div`
  position: absolute;
  padding: 5px;
  width: 22px;
  font-size: 12px;
  border-radius: 11px;
  top: 35%;
  color: rgba(0, 0, 0, 0.7);
  border: 1.5px solid #93f6fe;
  // 브론즈 #947766
  // 플래  #578085
  // 마스터 #E15FF7
  // 챌린저 #93F6FE
`;

function Comment() {
  let [clicked, setClicked] = useState(false);

  return (
    <Wrapper>
      <Ul>
        <li>
          <button disabled={!clicked} onClick={() => setClicked((click) => !click)}>
            구매
          </button>
        </li>
        <li bordercol={clicked}>
          <button disabled={clicked} onClick={() => setClicked((click) => !click)}>
            리뷰
          </button>
        </li>
      </Ul>

      <Main>
        <User>
          <li>
            <div></div>
          </li>
          <li>
            <UserNotificationBox>
              <div>nickname</div>
              <div>
                {[1, 2, 3, 4, 5].map((_, i) => {
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" key={i}>
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  );
                })}
              </div>
            </UserNotificationBox>
            <UserNotificationBox>
              <Badge>단골</Badge>
            </UserNotificationBox>
          </li>
        </User>
        <Review></Review>
      </Main>
    </Wrapper>
  );
}

export default Comment;

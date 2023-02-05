import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;

  div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      text-align: center;
      margin: 10px 0px;
    }
  }
`;

function NotFound() {
  return (
    <Wrapper>
      <div>
        <div>잘못된 접근입니다.</div>
        <div>왼쪽 상단의 아이콘을 눌러 홈페이지로 이동해주세요</div>
      </div>
    </Wrapper>
  );
}

export default NotFound;

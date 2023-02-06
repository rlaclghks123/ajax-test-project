import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 0px 3%;

  a {
    text-decoration: none;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      margin: 15px 0px;
      padding: 10px;
      outline: none;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      font-size: 17px;

      &::placeholder {
        opacity: 0.5;
      }

      &:focus {
        border-color: #2ac1bc;
      }
    }

    button {
      margin-top: 20px;
      background-color: #2ac1bc;
      padding: 20px 10px;
      outline: none;
      border: none;
      text-align: center;
      color: white;
    }
  }

  div {
    margin-top: 2%;
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    padding: 0px 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    button {
      background-color: inherit;
      width: 200px;
      height: 100%;
      border: none;
    }

    span {
      opacity: 0.2;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  div {
    display: flex;
    justify-content: center;
    padding: 17px;

    &:first-child {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      display: flex;
      align-items: center;

      span:last-child {
        opacity: 0.6;
      }
      svg {
        margin-right: 8px;
        fill: #1a77f2;
        width: 20px;
        height: 20px;
      }
    }

    &:last-child {
      margin-top: 130px;
      font-size: 18px;
      opacity: 0.7;

      span:last-child {
        color: #2ac1bc;
        margin-left: 5px;
      }
    }
  }
`;

function Login() {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/login', {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((response) => {
        console.log('hi', response);
        sessionStorage.setItem('loggedIn', response.data.loggedIn);
        sessionStorage.setItem('sessionId', response.data.sessionId);
        navigate('/ajax-test-project');
        window.location.reload();
        return;
      })
      .catch((error) => {
        alert(error.response.data.error);
        navigate('/ajax-test-project');
        return;
      });
  };

  return (
    <Wrapper>
      <Main>
        <form method="POST" onSubmit={handleLoginSubmit}>
          <input name="username" type="text" required placeholder="아이디 또는 이메일"></input>
          <input name="password" type="password" required placeholder="비밀번호"></input>
          <button>로그인</button>
        </form>
        <div>
          <button>아이디 찾기</button>
          <span>|</span>
          <button>비밀번호 찾기</button>
        </div>
      </Main>
      <Footer>
        <div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </span>
          <span>Facebook으로 로그인</span>
        </div>

        <div>
          <span>혹시, 처음이신가요? </span>
          <Link to="/join">
            <span>회원가입</span>
          </Link>
        </div>
      </Footer>
    </Wrapper>
  );
}

export default Login;

import { useNavigate } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    padding: 60px;
    border-radius: 10px;

    input {
      padding: 15px 50px;
      margin: 5px 0px;
      border: none;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      outline: none;
      &:focus {
        border-color: #2ac1bc;
      }
    }
    button {
      padding: 15px 30px;
      margin: 10px 0px;
      border: none;
      background-color: #2ac1bc;
      color: white;
    }
  }
`;

function JoinWithAxios() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/join', {
        nickName: e.target.nickName.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        password2: e.target.password2.value,
      })
      .then((response) => {
        alert(response.data.message);
        return navigate('/');
      })
      .catch((error) => {
        alert(error.response.data.error);
        return navigate('/');
      });
  };

  return (
    <Wrapper>
      <label for="join">회원가입</label>
      <form method="POST" onSubmit={handleSubmit}>
        <input name="nickName" type="text" required placeholder="Nickname" id="join"></input>
        <input name="username" type="text" required placeholder="Username"></input>
        <input name="email" type="email" required placeholder="Email"></input>
        <input name="password" type="password" required placeholder="Password"></input>
        <input name="password2" type="password" required placeholder="Password Again"></input>
        <button name="submit" type="submit">
          제출하기
        </button>
      </form>
    </Wrapper>
  );
}

export default JoinWithAxios;

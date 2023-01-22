import { useNavigate } from 'react-router';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding: 60px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    input {
      text-align: center;
      background-color: #d5d6d7;
      padding: 15px 30px;
      border: none;
      margin: 10px 0px;
      border: none;
      outline: none;
      &::placeholder {
        color: white;
      }
    }
    button {
      border: none;
      background-color: #d5d6d7;
      color: white;
      padding: 15px 30px;
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
      <form method="POST" onSubmit={handleSubmit}>
        <input name="nickName" type="text" required placeholder="Nickname"></input>
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

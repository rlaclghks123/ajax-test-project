import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
  background-color: #efefef;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  svg {
    margin-left: 20px;
    margin-top: 10px;
    width: 25px;
    height: 25px;
    fill: #2ac1bc;
  }
`;

const Logout = styled.button`
  width: 100px;
  outline: none;
  border: none;
  margin-right: 20px;
  border: 1px solid #2ac1bc;
  border-radius: 10px;
  padding: 10px 10px;
  height: 40px;
  color: rgba(0, 0, 0, 0.7);
  background-color: white;
`;

function Nav() {
  const loggedIn = sessionStorage.getItem('loggedIn');

  const handleLogout = (e) => {
    e.preventDefault();
    if (!window.confirm('정말 로그아웃 하시겠습니까?')) return;

    axios
      .get('http://localhost:8080/logout')
      .then((response) => {
        alert(response.data.message);

        sessionStorage.removeItem('loggedIn');
        console.log('hi', response);
        return window.location.reload();
      })
      .catch((error) => {
        alert(error.response.data.error);
        console.log('error', error);
      });
  };
  return (
    <Header>
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
        </svg>
      </Link>
      {loggedIn && <Logout onClick={handleLogout}>로그아웃</Logout>}
    </Header>
  );
}

export default Nav;

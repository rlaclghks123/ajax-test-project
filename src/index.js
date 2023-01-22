import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import Home from './frontend/Home.js';
import JoinWithFetch from './frontend/Join/JoinWithFetch.js';
import JoinWithXML from './frontend/Join/JoinWithXML.js';
import Login from './frontend/Login.js';

const HomeBtn = styled.div`
  display: flex;
  justify-content: center;

  button {
    height: 30px;
    color: black;
    border: none;
    margin-top: 30px;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <Link to="/">
        <HomeBtn>
          <button>home</button>
        </HomeBtn>
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/join" element={<JoinWithFetch />} /> */}
        <Route path="/join" element={<JoinWithXML />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

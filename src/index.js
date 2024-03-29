import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Purchase from './frontend/Purchase.js';

import Home from './frontend/Home.js';
import JoinWithAxios from './frontend/Join/JoinWithAxios.js';
import JoinWithFetch from './frontend/Join/JoinWithFetch.js';
import JoinWithXML from './frontend/Join/JoinWithXML.js';
import Login from './frontend/Login.js';
import Nav from './frontend/Nav.jsx';
import KakaoMap from './frontend/KakaoMap.js';
import NotFound from './frontend/NotFound.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <Nav />
      <Routes>
        <Route path="/ajax-test-project" element={<Home />} />
        <Route path="/join" element={<JoinWithAxios />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kakaoMap" element={<KakaoMap />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

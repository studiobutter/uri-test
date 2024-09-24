import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import BBS from './pages/miyoushe';
import HoYoLAB from './pages/hoyolab';
import Mobile from './pages/mobile'
import Genshin from './pages/redirects/genshin';
import Sky from './pages/redirects/sky';
// Testing

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/hoyolab" element={<HoYoLAB />} />
        <Route path="/bbs" element={<BBS />} />
        <Route path="/redirects/genshin" element={<Genshin />} />
        <Route path="/redirects/sky" element={<Sky />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

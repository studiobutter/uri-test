import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import BBS from './pages/miyoushe';
import HoYoLAB from './pages/hoyolab';
import Mobile from './pages/mobile'
// Testing

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/hoyolab" element={<HoYoLAB />} />
        <Route path="/bbs" element={<BBS />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

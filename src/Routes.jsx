import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import BBS from './pages/miyoushe';
import HoYoLAB from './pages/hoyolab';
import Mobile from './pages/mobile'
import HoYo from './pages/redirects/hoyo';
import Agent from './pages/agent';
import StuffPage from './pages/stuff';
import Status from './pages/status';

// Testing

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/hoyolab" element={<HoYoLAB />} />
        <Route path="/bbs" element={<BBS />} />
        <Route path="/redirects/hoyo" element={<HoYo />} />
        <Route path="/status" element={<Status />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/stuff" element={<StuffPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

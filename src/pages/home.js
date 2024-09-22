import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <h1>URI Scheme Testing</h1>
      <Link to="/mobile">Open Apps Testing</Link>
      <p></p>
      <Link to="/hoyolab">HoYoLAB</Link>
      <p></p>
      <Link to="/bbs">BBS</Link>
    </div>
  );
}

export default Home;

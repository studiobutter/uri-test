import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import InAppBrowserRedirect from '../components/InAppBrowserRedirect';
const Home = () => {

  return (
    <div className="App">
      <InAppBrowserRedirect />
      <h1>URI Scheme Testing</h1>
      <Link to="/mobile">Open Apps Testing</Link>
      <p></p>
      <Link to="/hoyolab">HoYoLAB</Link>
      <p></p>
      <Link to="/bbs">BBS</Link>
      <p></p>
      <Link to="/agent">Display User Agent</Link>
      <p></p>
      <Link to="/redirect">Redirect</Link>
      <p>
        For more Protocols and APIs, check out <a href='https://studiobutter.github.io/anime_api'>anime_api</a>
      </p>
    </div>
  );
}

export default Home;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { isMobile, isIOS } from 'react-device-detect';
import useInAppBrowser from '../hooks/useInAppBrowser';

const Home = () => {
  const currentUrl = window.location.href;
  const isInAppBrowser = useInAppBrowser(currentUrl);

  useEffect(() => {
    if (isInAppBrowser && isIOS) {
      window.location.href = 'com-apple-mobilesafari-tab:' + currentUrl;
    }
  }, [isInAppBrowser, currentUrl]);

  return (
    <div className="App">
      <h1>URI Scheme Testing</h1>
      <Link to="/mobile">Open Apps Testing</Link>
      <p></p>
      <Link to="/hoyolab">HoYoLAB</Link>
      <p></p>
      <Link to="/bbs">BBS</Link>
      <p></p>
      <Link to="/agent">Display User Agent</Link>
      <p></p>
      <p>
        For more Protocols and APIs, check out <a href='https://studiobutter.github.io/anime_api'>anime_api</a>
      </p>
      {isMobile ? (
        isInAppBrowser ? (
          <p>Currently in an in-app browser</p>
        ) : (
          <p>Currently in a system browser</p>
        )
      ) : (
        <p>Currently in a desktop browser</p>
      )}
      <p>Test Link: <a href='com-apple-mobilesafari-tab:https://studiobutter.github.io/uri-test/'>iOS</a></p>
    </div>
  );
}

export default Home;

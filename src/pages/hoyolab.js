import React from 'react';
import { isMobile } from 'react-device-detect'

function HoYoLAB() {
  return (
    <div className="HoYoLAB">
      {isMobile ? (
        <div>
          <h1>HoYoLAB URI Test (Mobile)</h1>
          <a href="hoyolab://openURL?url=https%3A%2F%2Fwww.hoyolab.com%2Fhome">
            Home
          </a>
          <p></p>
          <a href="hoyolab://openURL?url=https%3A%2F%2Fact.hoyolab.com%2Fys%2Fapp%2Finteractive-map%2Findex.html">
            Teyvat Interactive Map
          </a>
        </div>
      ) : (
        <div>
          <h1>HoYoLAB URI Test (PC)</h1>
          <a href="https://www.hoyolab.com/home">
            Home
          </a>
          <p></p>
          <a href="https://act.hoyolab.com/ys/app/interactive-map/index.html">
            Teyvat Interactive Map
          </a>
        </div>
      )}
      <p></p>
      <a href="hoyolab://openURL?url=https://studiobutter.github.io/uri-test/">
         Home
      </a>
      <p></p>
    </div>
  );
}

export default HoYoLAB;

import React from 'react';
import { isMobile } from 'react-device-detect'

function BBS() {
  return (
    <div className="BBS">
      {isMobile ? (
        <div>
          <h1>miyoushe URI Test (Mobile)</h1>
          <a href="mihoyobbs://openURL?url=https%3A%2F%2Fwww.miyoushe.com%2Fys">
            miyoushe - Genshin
          </a>
          <p></p>
          <a href="mihoyobbs://openURL?url=https%3A%2F%2Fact.mihoyo.com%2Fys%2Fapp%2Finteractive-map%2Findex.html%3Fbbs_presentation_style%3Dno_header%26lang%3Dzh-cn%26utm_source%3Dbbs%26utm_medium%3Dmys%26utm_campaign%3Dpcicon%26_markerFps%3D24%23%2Fmap%2F2">
            Genshin Interactive Map
          </a>
        </div>
      ) : (
        <div>
          <h1>miyoushe URI Test (PC)</h1>
          <a href="https://www.miyoushe.com/ys">
            miyoushe - Genshin
          </a>
          <p></p>
          <a href="https://act.mihoyo.com/ys/app/interactive-map/index.html?bbs_presentation_style=no_header&lang=zh-cn&utm_source=bbs&utm_medium=mys&utm_campaign=pcicon&_markerFps=24#/map/2">
            Genshin Interactive Map
          </a>
        </div>
      )}
      <p></p>
      <a href="mihoyobbs://openURL?url=https://studiobutter.github.io/uri-test/">
         Test Link
      </a>
      <p></p>
      <a href="mihoyobbs://openURL?url=https://pay.mihoyo.com/">
         miHoYo Pay
      </a>
      <p></p>
    </div>
  );
}

export default BBS;

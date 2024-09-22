import React from 'react';
import { isMobile } from 'react-device-detect'

function HoYoLAB() {
  return (
    <div className="HoYoLAB">
      {isMobile ? (
        <div>
          <h1>HoYoLAB URI Test (Mobile)</h1>
          <a href="hoyolab://openURL?url=https%3A%2F%2Fwww.hoyolab.com%2Fhome">
            HoYoLAB - Home
          </a>
          <p></p>
          <a href="hoyolab://openURL?url=https%3A%2F%2Fact.hoyolab.com%2Fys%2Fevent%2Fbbs-event-20240828mimo%2Findex.html%3Fis_need_floating%3Dtrue%26hyl_presentation_style%3Dfullscreen%26utm_campaign%3DNataDragon%26utm_id%3D2%26utm_medium%3Dtools%26utm_source%3Dhoyolab%26lang%3Den-us%26bbs_theme%3Ddark%26bbs_theme_device%3D1">
            Raise Saurian and Get Primogems
          </a>
        </div>
      ) : (
        <div>
          <h1>HoYoLAB URI Test (PC)</h1>
          <a href="https://www.hoyolab.com/home">
            HoYoLAB - Home
          </a>
          <p></p>
          <a href="https://act.hoyolab.com/ys/event/bbs-event-20240828mimo/index.html?is_need_floating=true&hyl_presentation_style=fullscreen&utm_campaign=NataDragon&utm_id=2&utm_medium=tools&utm_source=hoyolab&lang=en-us&bbs_theme=dark&bbs_theme_device=1">
            Raise Saurian and Get Primogems
          </a>
        </div>
      )}
    </div>
  );
}

export default HoYoLAB;

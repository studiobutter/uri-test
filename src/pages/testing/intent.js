import React from 'react';

function Intent() {
  return (
    <div className="App">
      <h1>Testing Page - Android Intent</h1>
      <a href="intent://openURL?url=https%3A%2F%2Fwww.hoyolab.com%2Fhome%3Futm_source%3DMweb%26utm_medium%3DOpenAppGuideModule%26utm_id%3D%26utm_campaign%3D&adjust_reftag=cUd8bWeLkEmk0#Intent;scheme=hoyolab;package=com.mihoyo.hoyolab;S.market_referrer=adjust_reftag%3DcUd8bWeLkEmk0;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.mihoyo.hoyolab%26referrer%3Dadjust_reftag%253DcUd8bWeLkEmk0;end">HoYoLAB Intent</a>
      <p>Bring you to the app or App Store page of the app</p>
      <p></p>
      <a href="intent://openURL?url=https%3A%2F%2Fwww.hoyolab.com%2Fhome%23Intent%3Bscheme%3Dhoyolab%3Bpackage%3Dcom.mihoyo.hoyolab%3BS.browser_fallback_url%3Dstudiobutter.github.io%2Furi-test%2F%23%2Ftest%2Fsuccess%3Bend">Take you to the app or to Custom Page</a>
    </div>
  );
}

export default Intent;

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
          <p></p>
          <a href="hoyolab://close-webview">
            Close WebView
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
         Test Link
      </a>
      <p></p>
      <a href="hoyolab://openURL?url=https%3A%2F%2Fstudiobutter.github.io%2Fevent-redirects%2F%23%2Fevent%2Fgenshin%3FisOpenSystemBrowser%3Dtrue">
         Redirect Link to Genshin
      </a>
      <p></p>
      <a href="hoyolab://openURL?url=https://hoyo.link/fNMkFFAL?isOpenSystemBrowser=true">
         Redirect Link to Genshin
      </a>
      <p></p>
      <p></p>
      <a href="https://account.hoyoverse.com">
         Account Center
      </a>
      <p></p>
    </div>
  );
}

export default HoYoLAB;

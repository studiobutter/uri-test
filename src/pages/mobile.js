import React from 'react';

import AndroidSystemBrowserLink from '../component/AndroidExternalLink';

const testUrl = 'https://example.com';

function Mobile() {
  return (
    <div className="Mobile">
      <h1>URI Scheme Testing</h1>
      <p>
        Mobile only. If you want to check for PC URI, see <a href="https://studiobutter.github.io/anime_api/HoYoPlay/URI.html"> anime_api HoYoPlay URI Schemes.</a>
      </p>
      <p></p>
      <p>
        Fun fact: This is what people use for those NFC Tags videos. You can check the code to see how it works.
      </p>
      <p>Test links</p>
      <p></p>
      <a href='x-safari-https://example.com'>iOS/iPadOS</a>
      <p></p>
      <a href="https://example.com" onclick="window.open(this.href, '_blank')" rel="noopener noreferrer">Android - 1</a>
      <p></p>
      <a href="https://example.com" onclick="window.open(this.href, '_system')" rel="noopener noreferrer">Android - 2</a>
      <p></p>
      <a href="https://example.com" onclick="window.open('https://example.com', '_system'); return false;" rel="noopener noreferrer">Android - 3</a>
      <p></p>
      <a href="external:https://example.com" onclick="window.open('external:https://example.com', '_system'); return false;" rel="noopener noreferrer">Android - 4</a>
      <p></p>
      <a href="external:https://example.com" onclick="window.open(this.href, '_system')" rel="noopener noreferrer">Android - 5</a>
      <p></p>
      <a href="intent://example.com#Intent;scheme=https;package=com.android.chrome;end;" onclick="window.open(this.href, '_system')" rel="noopener noreferrer">Android - Intent 1</a>
      <p>
        <AndroidSystemBrowserLink href={testUrl} className="AndroidSystemBrowserLink">
          Android - Intent 2
        </AndroidSystemBrowserLink>
      </p>
      <p></p>
      <h2>Genshin Impact</h2>
      <a href="genshin://">Open Genshin - Global/Global - Galaxy</a>
      <p></p>
      <a href="yuanshen://">Open Genshin - CN/BiliBili</a>
      <p></p>
      <a href="yuanshengame://">Open Genshin (Any region)</a>
      <p></p>
      <h3>Open Genshin - Cloud</h3>
      <a href="yscloud://">China</a>
      <p></p>
      <a href="cloudgenshin://">Global</a>
      <p></p>
      <h3>Open Genshin - Vietnam</h3>
      <a href="genshinvn://">Protocall - 1</a>
      <p></p>
      <a href="yuanshengamevn://">Protocall - 2</a>
      <p></p>
      <h2>Honkai: Star Rail</h2>
      <a href="honkaistarrail://">Open Star Rail - Global/Global - Galaxy</a>
      <p></p>
      <a href="starrailmihoyo://">Open Star Rail - CN/BiliBili</a>
      <p></p>
      <a href="honkaistarrailvn://">Open Star Rail - Vietnam</a>
      <p></p>
      <a href="srcloud://">Open Star Rail - CN - Cloud</a>
      <p></p>
      <h2>Zenless Zone Zero</h2>
      <a href="zenlessglobal://">Open Zenless - Global</a>
      <p></p>
      <a href="zenless://">Open Zenless - CN/BiliBili</a>
      <p></p>
      <a href="zenlessvn://">Open Zenless - Vietnam</a>
      <p></p>
      <h2>Honkai Impact 3rd</h2>
      <a href="bh3global://">Open HI3rd - Global</a>
      <p></p>
      <a href="bh3oversea://">Open HI3rd - SEA</a>
      <p></p>
      <a href="bh3game://">Open HI3rd - CN/BiliBili</a>
      <p></p>
      <a href="bh3korea://">Open HI3rd - KR</a>
      <p></p>
      <a href="bh3asia://">Open HI3rd - TW/HK/MO</a>
      <h3>Open HI3rd - JP</h3>
      <a href="bh3jp://">Protocall - 1</a>
      <p></p>
      <a href="bh3rdjp://">Protocall - 2</a>
      <p></p>
      <h3>Open HI3rd - Vietnam</h3>
      <a href="bh3overseavn://">Protocall - 1</a>
      <p></p>
      <a href="bh3vn://">Protocall - 2</a>
      <p></p>
    </div>
  );
}

export default Mobile;

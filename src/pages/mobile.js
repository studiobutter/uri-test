import React from 'react';

function Mobile() {
  return (
    <div className="Mobile">
      <h1>URI Scheme Testing</h1>
      <p>
        Mobile only and may only work only on iOS, haven't fully tested on Android. If you want to check for PC URI, see <a href="https://studiobutter.github.io/anime_api/HoYoPlay/URI.html"> anime_api HoYoPlay URI Schemes Protocalls.</a>
      </p>
      <a href="genshin://">Open Genshin - Global</a>
      <p></p>
      <a href="yuanshen://">Open Genshin - CN</a>
      <p></p>
      <a href="yuanshengame://">Open Genshin (Either region)</a>
      <p></p>
      <a href="honkaistarrail://">Open Star Rail - Global</a>
      <p></p>
      <a href="starrailmihoyo://">Open Star Rail - CN</a>
      <p></p>
      <a href="zenlessglobal://">Open Zenless - Global</a>
      <p></p>
      <a href="zenless://">Open Zenless - CN</a>
      <p></p>
    </div>
  );
}

export default Mobile;

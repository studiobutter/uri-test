import React, { useEffect } from "react";

import useInAppBrowser from "../hooks/useInAppBrowser";
import { isMobile, isIOS, isAndroid } from "react-device-detect";

const Redirect = () => {
    const isInAppBrowser = useInAppBrowser();
    const url = "https://www.example.com?isOpenSystemBrowser=true";
    if (isIOS && isInAppBrowser) {
        window.location.href = `applewebdata://${url}`;
    } else if (isAndroid && isInAppBrowser) {
        const chromeUrl = `intent://${url.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`;
        window.location.href = chromeUrl
    } else {
        window.open(url, "_blank");
    }
    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    );
}

export default Redirect; 
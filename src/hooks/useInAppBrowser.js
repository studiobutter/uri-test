import { useEffect, useState } from "react";

/**
 * Custom hook to detect in-app browsers (Instagram, Facebook, Twitter, TikTok, etc.)
 * and open links in the system browser if detected.
 *
 * @param {string} url - Optional URL to open in a system browser if detected
 * @returns {boolean} - `true` if in an in-app browser, otherwise `false`
 */
const useInAppBrowser = (url = null) => {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // List of known in-app browser patterns
    const inAppBrowserPatterns = [
      /FBAN|FBAV/i, // Facebook
      /Instagram/i, // Instagram
      /Twitter/i, // Twitter
      /Snapchat/i, // Snapchat
      /TikTok/i, // TikTok
      /Line/i, // Line app
      /miHoYoBBSOversea\/[0-9.]+/i, // HoYoLAB
    ];

    const isInApp = inAppBrowserPatterns.some((pattern) =>
      pattern.test(userAgent)
    );

    setIsInAppBrowser(isInApp);

    // If in an in-app browser and a URL is provided, force open in a system browser
    if (isInApp && url) {
      setTimeout(() => {
        window.open(url, "_blank"); // Opens in a new tab (system browser)
      }, 500); // Small delay to ensure detection
    }
  }, [url]);

  return isInAppBrowser;
};

export default useInAppBrowser;

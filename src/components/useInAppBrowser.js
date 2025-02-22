import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import useInAppBrowser from "./useInAppBrowser";

const InAppBrowserRedirect = () => {
  const isInAppBrowser = useInAppBrowser();
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;

  // Function to copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
  };

  // Function to force open in Safari/Chrome
  const openInSystemBrowser = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      window.location.href = `applewebdata://${currentUrl}`;
      setTimeout(() => {
        window.location.href = currentUrl; // Fallback
      }, 1000);
    } else if (isAndroid) {
      const chromeUrl = `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`;
      window.location.href = chromeUrl;
      setTimeout(() => {
        window.location.href = currentUrl; // Fallback
      }, 1000);
    } else {
      window.open(currentUrl, "_blank");
    }
  };

  // Try auto-opening in system browser
  useEffect(() => {
    if (isMobile && isInAppBrowser) {
      openInSystemBrowser();
    }
  }, [isInAppBrowser]);

  return (
    isMobile && isInAppBrowser ? (
      <div style={styles.container}>
        <h2>You are using an In-App Browser</h2>
        <p>For the best experience, please open this page in your system browser.</p>
        
        <ol>
          <li>Tap the <strong>three-dot menu (⋮)</strong> or <strong>share icon</strong>.</li>
          <li>Select <strong>"Open in Browser"</strong> or <strong>"Open in Safari/Chrome"</strong>.</li>
        </ol>

        {/* Copy to Clipboard Button */}
        <button onClick={copyToClipboard} style={styles.button}>
          {copied ? "✅ Copied!" : "📋 Copy Link"}
        </button>

        {/* Open Manually Button */}
        <a href={currentUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
          👉 Open in System Browser
        </a>
      </div>
    ) : null
  );
};

// Basic Styles
const styles = {
  container: {
    padding: "20px",
    background: "#fff3cd",
    border: "1px solid #ffeeba",
    borderRadius: "8px",
    textAlign: "center",
    margin: "20px",
  },
  button: {
    padding: "10px 20px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  link: {
    display: "block",
    marginTop: "15px",
    color: "#007bff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default InAppBrowserRedirect;

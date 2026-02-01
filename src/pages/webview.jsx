import { useEffect, useState } from "react";

function testStorage(storage) {
  try {
    const k = "__test__";
    storage.setItem(k, "1");
    storage.removeItem(k);
    return true;
  } catch {
    return false;
  }
}

export default function WebView() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const r = {};

    // Basic environment
    r.userAgent = navigator.userAgent;
    r.platform = navigator.platform;
    r.language = navigator.language;
    r.cookieEnabled = navigator.cookieEnabled;

    // WebView hints
    r.isStandalone = window.matchMedia?.("(display-mode: standalone)")?.matches ?? false;
    r.hasWKWebViewBridge = !!window.webkit?.messageHandlers;
    r.hasAndroidBridge = !!window.Android || !!window.android;

    // Storage
    r.localStorage = testStorage(window.localStorage);
    r.sessionStorage = testStorage(window.sessionStorage);

    // APIs commonly restricted in WebViews
    r.geolocation = "geolocation" in navigator;
    r.mediaDevices = "mediaDevices" in navigator;
    r.serviceWorker = "serviceWorker" in navigator;
    r.webRTC = "RTCPeerConnection" in window;
    r.clipboard = "clipboard" in navigator;

    // Sample of globals (don’t dump everything)
    r.windowKeysSample = Object.getOwnPropertyNames(window).slice(0, 50);

    setReport(r);
  }, []);

  if (!report) {
    return <div style={{ fontFamily: "monospace" }}>Loading…</div>;
  }

  return (
    <div style={{ fontFamily: "monospace", padding: 16 }}>
      <h2>WebView Capability Test</h2>
      <pre>{JSON.stringify(report, null, 2)}</pre>
    </div>
  );
}

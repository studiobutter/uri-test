import { useLocation } from 'react-router-dom';

function HoYo() {
  const location = useLocation();
  const urlParam = new URLSearchParams(location.search).get('url');

  if (!urlParam) {
    return <p>No URL parameter found.</p>;
  }

  // Remove http(s) from the URL (if present)
  const sanitizedUrl = urlParam.replace(/^https?:\/\//, '');

  // Define domain-app mapping (more scalable for multiple domains)
  const domainAppMap = {
    'act.hoyoverse.com': 'hoyolab://openURL',
    'hoyo.link': 'hoyolab://openURL',
    'www.hoyolab.com': 'hoyolab://openURL',
    'act.hoyolab.com': 'hoyolab://openURL',
    'act.mihoyo.com': 'mihoyobbs://openURL',
    'mhyurl.cn': 'mihoyobbs://openURL',
    'www.miyoushe.com': 'mihoyobbs://openURL',
    'example.com': 'myapp://openURL',
    'www.example.com': 'myapp://openURL'
  };

  // Check if the sanitized URL matches a known domain
  const targetApp = domainAppMap[sanitizedUrl];

  if (!targetApp) {
    // If no matching domain is found, redirect to the original URL with protocol after a 3-second delay
    setTimeout(() => {
      window.location.href = `http://${urlParam}`;
    }, 3000);
    return null;
  }

  // Construct the "myapp://" URI with the sanitized URL
  const myappUri = `${targetApp}?url=${sanitizedUrl}`;

  // Try to open the "myapp://" URL in a new tab
  window.open(myappUri, '_blank');

  // Inform the user about the attempted redirect
  return (
    <div>
      <p>Redirecting to the app...</p>
      <p>You will be asked to open a new Window. Or your browser may blocked the pop-up</p>
      <p>If the app doesn't open, you can try opening the following URL:</p>
      <a href={`http://${urlParam}`} target="_blank" rel="noopener noreferrer">
        Open original URL
      </a>
    </div>
  );
}

export default HoYo
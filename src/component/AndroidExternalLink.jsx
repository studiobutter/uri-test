const AndroidSystemBrowserLink = ({ href, children, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    // For Android, we use the custom scheme 'intent://'
    const intentUrl = `intent://${href.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
    
    // Fallback URL in case the intent scheme fails
    const fallbackUrl = href;
    
    try {
      // Try to open in Android system browser first
      window.location.href = intentUrl;
      
      // Set a timeout to catch if the intent scheme failed
      setTimeout(() => {
        // Check if the page is still here (intent failed)
        if (document.hidden !== true) {
          // If intent failed, try the direct URL
          window.location.href = fallbackUrl;
        }
      }, 500);
    } catch (e) {
      // If anything fails, fall back to regular URL
      window.location.href = fallbackUrl;
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default AndroidSystemBrowserLink;
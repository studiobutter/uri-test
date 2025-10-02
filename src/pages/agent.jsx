const Agent = () => {
  const userAgent = navigator.userAgent;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Agent Information</h1>
      <p>{userAgent}</p>
    </div>
  );
};

export default Agent;

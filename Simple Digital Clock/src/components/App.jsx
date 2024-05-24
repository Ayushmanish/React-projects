import React from "react";

function App() {
  setInterval(getTime, 1000);

  let time = new Date().toLocaleTimeString();
  const [currtime, setTime] = React.useState(time);

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }
  return (
    <div className="container">
      <h1>{currtime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;

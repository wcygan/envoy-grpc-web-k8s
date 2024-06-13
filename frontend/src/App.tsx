import React, { useState } from 'react';
import pingClient from './clients';
import './App.css';

function App() {
  const [successCount, setSuccessCount] = useState(0);
  const [failureCount, setFailureCount] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const sendPing = async () => {
    console.log("Sending ping...");
    try {
      await pingClient.ping({ message: "hello" });
      setSuccessCount(successCount + 1);
    } catch (error) {
      setFailureCount(failureCount + 1);
      setLog([...log, `Ping failed: ${error}`]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ping Service</h1>
        <button onClick={sendPing}>Send Ping</button>
        <div>
          <p>Successful Pings: {successCount}</p>
          <p>Unsuccessful Pings: {failureCount}</p>
        </div>
        <div className="log-box">
          <h4>Error Log</h4>
          {log.map((entry, index) => (
            <p key={index}>{entry}</p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
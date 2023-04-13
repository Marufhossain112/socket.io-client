import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
function App() {
  const socket = io.connect("http://localhost:5000");
  // console.log(socket);
  const [message, setMessage] = useState("");
  const [getMessage, setGetMessage] = useState("");
  const handleSend = () => {
    socket.emit("sendMessageDataEvent", message);
  };
  useEffect(() => {
    socket.on("showGetMessage", (data) => {
      setGetMessage(data);
    });
  }, [socket]);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello bro....</h1>
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h2 style={{ color: "green" }}>Sender</h2> :  <h3 style={{ marginRight: "10px" }}>{message}</h3>
        <h2 style={{ color: "red" }}>Receiver</h2> : <h3>{getMessage}</h3>
      </div>
      <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder='message...' />
      <button onClick={() => handleSend()}>Send</button>
    </div>
  );
}

export default App;

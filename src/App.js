import { useState } from 'react';
import { io } from 'socket.io-client';
function App() {
  const socket = io.connect("http://localhost:5000");
  // console.log(socket);
  const [messege, setMessage] = useState("");
  const handleSend = () => {
    // console.log(messege);
    socket.emit("sendMessageDataEvent", messege);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello bro....</h1>
      <input onBlur={(e) => setMessage(e.target.value)} type="text" placeholder='messege...' />
      <button onClick={handleSend()}>Send</button>
    </div>
  );
}

export default App;

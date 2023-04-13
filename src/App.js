import { io } from 'socket.io-client';
function App() {
  const socket = io("http://localhost:5000");
  console.log(socket);
  return (
    <div className="App">
      <h1>Hello bro....</h1>
    </div>
  );
}

export default App;

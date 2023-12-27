import './App.css';
import { useWakeLock } from 'react-screen-wake-lock';

function App() {
  const { isSupported: isWakeLockSupported, request: requestWakeLock } = useWakeLock();

  return (
    <div className="App">
      <header className="App-header">
      <div>
      <p>
        Screen Wake Lock API supported: <b>{`${isWakeLockSupported}`}</b>
        <br />
      
      </p>
      <button
        type="button"
        onClick={() => (requestWakeLock())}
      >
        {'Request'}
      </button>
    </div>

      </header>
    </div>
  );
}

export default App;



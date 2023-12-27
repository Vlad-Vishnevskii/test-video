import './App.css';
import { useWakeLock } from 'react-screen-wake-lock';

function App() {
  const { isSupported, request } = useWakeLock();

  return (
    <div className="App">
      <header className="App-header">
      <div>
      <p>
        Screen Wake Lock API supported: <b>{`${isSupported}`}</b>
        <br />
      
      </p>
      <button
        type="button"
        onClick={() => (request())}
      >
        {'Request'}
      </button>
    </div>

      </header>
    </div>
  );
}

export default App;



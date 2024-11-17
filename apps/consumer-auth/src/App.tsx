import reactLogo from './assets/react.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState('my-token-123');

  const openApp = () => {
    const query = new URLSearchParams(window.location.search);
    const redirectTo = query.get('atom-redirect');
    window.location.href = `${redirectTo}?access_token=${token}`;
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Atom Signin</h1>
      <div className="card">
        <label>Token</label>
        <input
          type="text"
          value={token}
          style={{ fontSize: 16 }}
          onChange={(evt) => {
            setToken(evt.target.value);
          }}
        />
      </div>
      <div className="card">
        <button onClick={openApp}>Sign In</button>
      </div>
    </>
  );
}

export default App;

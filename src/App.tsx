import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from "./ui/Link";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link className="App-link" href="https://reactjs.org" rel="noopener noreferrer">
          {process.env.REACT_APP_MY_VAR}
        </Link>
      </header>
    </div>
  );
}

export default App;

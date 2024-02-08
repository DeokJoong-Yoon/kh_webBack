/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

/**
import "./App.css";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
};
 */

/** */
import './App.css';
import Header from './inputdata/Header';
import Input from './inputdata/Input';

const App = () => {
  return (
    <div>
      <Header/>
      <Input />
    </div>
  );
}




















export default App;

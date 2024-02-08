/**
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

import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import TodoItem from './component/TodoItem';
import {useState} from 'react';

const App = () => {
  return (
    <div className="App">
        <Header/>
        <TodoEditor/>
        <TodoList/>
        <TodoItem/>
    </div>
  );
}

export default App;

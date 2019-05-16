import React from 'react';
import logo from './logo.svg';
import logoPlatzi from './platzi.png';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  state = {
    logo: logo,
  }
  function onClick() {
    this.setState({
      logo: logoPlatzi, 
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <TransitionGroup>
        <CSSTransition
            key={this.state.logo}
            timeout={1000}
            className="fade">
          <img 
            src={this.state.logo} 
            className="App-logo" 
            alt="logo" 
          />
        </CSSTransition>
        </TransitionGroup>
        <h2>Hello World</h2>
        <button onClick={this.onClick.bind(this)}>click me!</button>
        <p>
         Edited, I am the fucking master using React muahahahaa
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

export default App;

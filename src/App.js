import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    
    const envName = window.RUNTIME_ENV_NAME;
    const envColor = window.RUNTIME_ENV_COLOR;
    const envStyle = {"backgroundColor": envColor,
                      "padding" : 5};

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to the jungle. we want to deploy again.
          </p>
          <p>
            Your current environment is <b style={envStyle}>{envName}</b>
          </p>

        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  async componentDidMount() {
      console.log(process.env);
      let route = await fetch('http://localhost:' + process.env.API_PORT );
      let route_data = await route.json();

      console.log(route_data);
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
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
}

export default App;

import React, { Component } from 'react';
import './styles/App.css';
import VisibleRecipeList from './containers/VisibleRecipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HELPANTO</h1>
          <p className="App-intro">
            Recipe keeper & cooking assistant
          </p>
        </header>
        <VisibleRecipeList />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './styles/App.css';
import ErrorModalContainer from './containers/ErrorModalContainer';
import NewRecipeModal from './containers/NewRecipeModal';
import RecipeListContainer from './containers/RecipeListContainer';
import RecipeDetailContainer from './containers/RecipeDetailContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ErrorModalContainer />
        <NewRecipeModal />
        <div className='App-visible'>
          <header className='App-header'>
            <h1 className='Logo-font'>HELPANTO</h1>
            <p className='Subtitle'>
              Recipe keeper & cooking assistant
            </p>
          </header>
          <RecipeListContainer />
          <RecipeDetailContainer />
          <footer className="App-header" style={{gridColumn: '1 / 3', gridRow: '3 / 4'}}>
            <p className='Logo-font Subtitle'>
              HELPANTO
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;

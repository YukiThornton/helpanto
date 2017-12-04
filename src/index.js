import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/root-reducer';
import thunk from 'redux-thunk';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

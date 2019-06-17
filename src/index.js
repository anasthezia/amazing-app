import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  console.log(store.getState());
})

const routing = (
  <Router>
    <Provider store={store}>

      <App />
    </Provider>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();

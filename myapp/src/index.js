import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/navbar.css'
import App from './App';
import { createStore } from 'redux'
import reducer from './reducer/reducer';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(reducer, { products: ['iPhone11', 'iPhone12', "iPhone13"], categories: ['mobiles', 'headphones', 'cases'] }, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


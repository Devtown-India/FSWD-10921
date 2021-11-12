import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/navbar.css'
import App from './App';
import { createStore } from 'redux'
import reducer from './reducer/reducer';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter } from 'react-router-dom'


const products = [
  {
    id: 1,
    name: 'iPhone11',
    description: "This is iphone 11"
  },
  {
    id: 5,
    name: 'iPhone12',
    description: "This is iphone 12"

  },
  {
    id: 3,
    name: 'iPhone13',
    description: "This is iphone 13"

  }
]


const store = createStore(reducer, products, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


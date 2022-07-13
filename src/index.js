import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'

// redux saga start
import store from './redux/store';
// redux saga end

// redux thunk start
// import { configureStore } from '@reduxjs/toolkit';
// import apiReducer from './redux/apiState';
// export const store = configureStore({
//   reducer: {
//     api: apiReducer
//   }
  
// })
// redux thunk end
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
   <BrowserRouter> <App /></BrowserRouter>
  </Provider>
);

reportWebVitals();

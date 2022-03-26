import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reducer, {initialState} from './redux/reducer/reducer';
import {StateProvider} from "./redux/action/StateProvider"

ReactDOM.render(
  <BrowserRouter>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/theme.css'
import Main from './Main';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main>
    <App />
  </Main>
);
reportWebVitals();

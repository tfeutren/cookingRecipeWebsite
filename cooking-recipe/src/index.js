import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //TODO: Ne pas oublier d'enlever le strict mode à la fin du développement
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

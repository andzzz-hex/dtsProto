import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './routes/navigation';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navigation />
    <Header/> 
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals();


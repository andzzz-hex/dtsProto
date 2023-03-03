import React from 'react';
import "./styles.css";
import ReactDOM from 'react-dom/client';
import './styles.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './routes/navigation';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));


//<Navigation />

root.render(

  <React.StrictMode>
      <BrowserRouter> 
          <App />
      </BrowserRouter>


  </React.StrictMode>
)

reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { CartContextProvider } from './components/Contexto/CartContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);
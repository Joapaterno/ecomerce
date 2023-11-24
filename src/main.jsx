import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useCart } from './components/Contexto/CartContext.jsx'
import { CartContextProvider } from './components/Contexto/CartContext.jsx'
import  ShopComponentContext  from './components/shopContext/shopContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopComponentContext>
      <App />
    </ShopComponentContext>    
  </React.StrictMode>,
)

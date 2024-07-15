import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/styles/main.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <p className="creator">Creator: Jasurbek Haydaraliyev</p>

  </React.StrictMode>,
)

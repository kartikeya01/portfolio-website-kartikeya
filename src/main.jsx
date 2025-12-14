import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Set dark mode as default on initial load to prevent flash of light mode
const storedTheme = localStorage.getItem("theme");
if (storedTheme !== "light") {
  document.documentElement.classList.add("dark");
  if (!storedTheme) {
    localStorage.setItem("theme", "dark");
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

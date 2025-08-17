import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router'
import App from './App.jsx'
import Routing from './website/component/Routing.jsx'

createRoot(document.getElementById('root')).render(
   <>
   
  <Router>
    <Routing />
  </Router>
   </>
  
)

import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router'
import App from './App.jsx'
import { AppContextProvider } from './website/context/AppContext.jsx'
createRoot(document.getElementById('root')).render(
   <>

  <Router>
   <AppContextProvider>
    <App/>

   </AppContextProvider>
  </Router>
   </>
  
)

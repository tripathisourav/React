import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  // app is now a children of usercontext to print content inside app we have to get props in usercontext then should write props.children in div of userContext
  <UserContext>
    <App /> 
  </UserContext>
)

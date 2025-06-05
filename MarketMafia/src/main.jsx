import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignupPage from './components/Signup'
import LoginPage from './components/Login'

const BrowserRouter = createBrowserRouter(
  [{
    path: '/',
    element: <App />
    },
  {
    path: '/signup',
    element: <SignupPage />
  },
{
  path: '/login',
  element: <LoginPage />
}]
  )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={BrowserRouter} />
  </StrictMode>,
)

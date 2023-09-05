import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import Personaje from './components/personaje.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },{
    path: "/personajes",
    element: <App />,
  },
  {
    path:"/personaje/:id",
    element: <Personaje/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

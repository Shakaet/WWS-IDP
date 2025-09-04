import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/Router.jsx'
import Provider from './AuthProvider/Provider.jsx';


createRoot(document.getElementById('root')).render(
  <Provider>
  
    {/* <App /> */}
   
       <RouterProvider router={router} />
   
  
  </Provider>
)

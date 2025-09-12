import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/Router.jsx'
import Provider from './AuthProvider/Provider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <Provider>
  
    {/* <App /> */}
   
       <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
   
  
  </Provider>
)

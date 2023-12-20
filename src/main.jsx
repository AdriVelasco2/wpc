import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <NextUIProvider>
 <div className="w-screen h-screen p-8  ">
        <App />
      </div>  
    </NextUIProvider>
  </React.StrictMode>,
)

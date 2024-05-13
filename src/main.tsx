import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// custom components
import App from './App.tsx'
import ComponentProvider from './ComponentProvider'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ComponentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ComponentProvider>
  </React.StrictMode>
)

import * as React from 'react'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// custom components
import App from './App.tsx'
import './index.css'
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

// // ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ComponentProvider>
//       <App />
//     </ComponentProvider>
//   </React.StrictMode>,
// )

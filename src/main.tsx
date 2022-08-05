import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App'
import LoginPage from './pages/Login'
import StockPage from './pages/StockPage'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/login" element={<LoginPage />} />
          <Route path="/store" element={<StockPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

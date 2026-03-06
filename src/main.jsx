import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Index } from './pages/home/home.jsx'
import { Employee } from './pages/employee/employee.jsx'
import './styles/style.css'

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Employee" element={<Employee />} />
    </Routes>
  </>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

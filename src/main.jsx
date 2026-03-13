import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EmployeeProvider } from './context/EmployeeContext';
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
      <EmployeeProvider>
        <App />
      </EmployeeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

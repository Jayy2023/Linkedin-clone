import './App.css'
import React from 'react'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          
        </Routes>
      </Router>
   
    </div>

  )
}

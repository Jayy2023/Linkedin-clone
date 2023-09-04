import './App.css'
import React from 'react'
import Login from './components/Login'
import Home  from './components/Home'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
   
    </div>

  )
}

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/homePage'
import LoginPage from './pages/logingPage'
import AdminHomePage from './pages/adminHomePage'
  
 


function App() {

  return (
    <div className='bg-amber-300'>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/signup' element={<h1>Signup Page</h1>} />
          <Route path="/admin/*" element={<AdminHomePage />} />
 
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

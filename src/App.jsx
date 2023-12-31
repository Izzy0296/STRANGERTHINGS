import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import SingleData from './pages/SingleData'

function App() {
  

  return (
   <div className="app">
   <Routes>
      
      <Route path='/' element= {<Home />}/>
      <Route path='/:id' element= {<SingleData/>}/>

    </Routes>
    </div>
  
  )
}

export default App

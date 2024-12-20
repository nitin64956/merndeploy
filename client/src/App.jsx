import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Open from './Open'



function App() {

 
  return (
    <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/home" element={<Home/>}></Route>

        <Route path="/login" element={<Login/>}></Route>

      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App

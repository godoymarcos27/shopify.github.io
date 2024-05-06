import { useState } from 'react'
import './App.css'
import { Portada } from './componentes/portada'
import 'boxicons'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './componentes/login_completo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Portada/>}/>
<Route path='/login_completo' element={<Login/>}/>

    </Routes>
    </BrowserRouter>
   
  )
}

export default App

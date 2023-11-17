import { useState } from 'react'
import Home from './components/home'
import Anuncio from './components/anuncio'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Home home/>
        <Anuncio />
    </>

  )
}

export default App

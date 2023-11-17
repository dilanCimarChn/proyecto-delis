import { useState } from 'react'

import Barra from './components/barra'
import SelectPP from './components/selectPP'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Barra />
      <SelectPP />
    </>
  )
}

export default App

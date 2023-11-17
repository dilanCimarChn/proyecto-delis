

import './App.css'
import FondoT from './components/FondoT'
import {fondoT} from './assets/APIfondo'
function App() {
  return(
    <>
    {
      fondoT.map(fondoo=>{
        return(
          
          <FondoT fondoT={fondoo}>
          
          
          </FondoT>
        )
      })
    } 
      
      
    </>
    
    
  )
  
}

export default App

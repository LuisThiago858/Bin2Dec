import { useState } from 'react'
import inputTextBin from './componets/Input'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Bin2Dec</h1>
        <div>
          <inputTextBin />
          
          <button>Converter</button>
        </div>
      </div>
    </>
  )
}

export default App

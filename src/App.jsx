import { useState } from 'react'
import './App.css'
import SpreadRest from './SpreadRest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SpreadRest />
      </div>
      <p className="read-the-docs">
        Let's go on some Javascript adventures!
      </p>
    </>
  )
}

export default App

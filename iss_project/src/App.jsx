import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = 'Vlad';

  
  return (
    <>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <h1>Hello, {name}!</h1>
    </>
  )
}

export default App

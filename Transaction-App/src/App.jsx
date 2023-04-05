import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TransList from './components/TransList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TransList />
    </div>
  )
}

export default App

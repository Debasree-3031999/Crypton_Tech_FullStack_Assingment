import { useState } from 'react'
import { MdOutlineRestaurantMenu} from "react-icons/md";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MdOutlineRestaurantMenu/>
    </div>
  )
}

export default App

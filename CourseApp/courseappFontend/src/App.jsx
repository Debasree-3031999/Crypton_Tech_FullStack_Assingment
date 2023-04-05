import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import MyCourse from './components/MyCourse';

function App() {
const[mydata,setMydata]=useState([]);

useEffect(()=>{
  fetch("http://localhost:3000/data").then((res) => {
    return res.json()
  }).then((data) => {
    console.log(data)
    setMydata(data)
  })
},[])
 

  return (
    <div className="App">
     <Navbar />

      <div className='mycourse'><MyCourse data={mydata} /></div> 
    </div>
  )
}

export default App

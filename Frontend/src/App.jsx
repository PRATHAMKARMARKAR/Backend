import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const[jokes, setjokes] = useState([]) 
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    }) 
    .catch((error)=>{
      console.log(error)
    })
})
  return (
    <>
      <h1>JOKES BY CHAT GPT</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
                <h3>{joke.id}.  {joke.title}</h3>
                <p>{joke.content}</p>
          </div>
        ))
      }
    </>)
}

export default App

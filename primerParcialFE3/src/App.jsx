// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Card from './Components/Card'


function App() {

  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name.length > 3){
    setShow(true)
    }
  }

  return (
    <>
      <Formulario handleSubmit={handleSubmit} setName={setName} setColor={setColor}/>
      {show && <Card name={name} color={color}/>}
    </>
  )
}

export default App
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Formulario = ({setName, setColor, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
         <label>Tu Nombre: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Tu Color: </label>
        <input type="color" onChange={(e) => setColor(e.target.value)}/>

        <button>Enviar</button>


    </form>
  )
}

export default Formulario
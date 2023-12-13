import React from 'react'

const Registro = () => {
  return (
    <div>
        <div className='registro'>
          <form action="#" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required></input>

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required></input>

            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required></input>

            <button type="submit" >Registrarse</button>
          </form>
        </div>
    </div>
  )
}

export default Registro
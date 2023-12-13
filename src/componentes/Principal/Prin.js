import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Prin = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">COLEGIO DE IDIOMAS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link " to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/coreano">Coreano</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/aymara">Aymara</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/ingles">Ingles</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/frances">Frances</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/aleman">Aleman</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/registro">Registro</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/creditos">Creditos</Link>
                    </li>
                   
                </ul>
                </div>
                
            </div>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Prin
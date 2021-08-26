import React from 'react'
import {Link} from 'react-router-dom'

const BadRequest = () => {
    return (
        <>
            <div className="row">
                <p className="center-align badReqText">404</p>
            <h1>Oops!</h1>
                <h2> Pagina no encontrada.</h2>
                <h4><Link to="/"> ← Volver al Inicio</Link></h4>
            </div>
        </>
    )
}

export default BadRequest;
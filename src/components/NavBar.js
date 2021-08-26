import React, { useEffect } from "react";
import M from 'materialize-css'; 
import {Link} from 'react-router-dom'

import logo_tienda from '../assets/logo_tienda.png'
import CartWidget from './CartWidget'

//JSON
import Categorias from '../assets/categorias.json'

const Navbar = () =>{

    useEffect(() => {
        let dropdowns = document.querySelectorAll(".dropdown-trigger");
        let options = {
          inDuration: 300,
          outDuration: 700,
          hover: true,
          coverTrigger: false,
          constrainWidth: false
        };
      M.Dropdown.init(dropdowns, options);
      }, []);

    return(
        <nav className="navbar-material">
            <div className="nav-wrapper">
                <Link id="logo-container" to="/" className="brand-logo left"><img src={logo_tienda} alt="logo"/></Link><Link id="logo-container" to="/" className="brand-logo text">CompuTar</Link>
                
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link className="dropdown-trigger" to="/" data-target="dropdown">Productos</Link>
                    <ul id="dropdown" className="dropdown-content">
                    {Categorias.map((categoria)=>{
                        return(
                            <li key={categoria.id}>
                                <Link to={`/category/${categoria.id}`} >{categoria.title}</Link>
                            </li>
                        )
                    })}
                    </ul>
                    </li>
                    <li>
                        <Link to="/Contacto">Contacto</Link>
                    </li>
                    <li>
                        <CartWidget cantidad={14}/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
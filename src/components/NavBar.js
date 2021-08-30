import React, {useContext, useEffect, useState} from 'react'
import M from 'materialize-css'; 
import {Link} from 'react-router-dom'
import { ItemsContext } from '../Context';

import logo_tienda from '../assets/logo_tienda.png'
import CartWidget from './CartWidget'

//JSON
import Categorias from '../assets/categorias.json'

const Navbar = () =>{

    const[CartItems] = useContext(ItemsContext);
    const[cantidadCarrito,setCantidadCarrito] = useState(0);

    const updateCantCarrito = ((CartItems) => {
        let total = 0;
        CartItems.forEach(element => {
            total = total + element.cantidad
        });
        setCantidadCarrito(total);
    })

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

        updateCantCarrito(CartItems);

    },[CartItems]);

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
                        <CartWidget cantidad={cantidadCarrito}/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
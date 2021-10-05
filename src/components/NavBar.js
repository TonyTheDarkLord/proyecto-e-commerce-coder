import React, {useContext, useEffect, useState} from 'react'
import M from 'materialize-css'; 
import {Link} from 'react-router-dom'
import { ItemsContext } from '../Context';

import logo_tienda from '../assets/logo_tienda.png'
import CartWidget from './CartWidget'

//Firebase
import {db} from '../services/Firebase'
import { collection, query, getDocs } from "firebase/firestore"

const Navbar = () =>{

    const context  = useContext(ItemsContext);
    const[cantidadCarrito,setCantidadCarrito] = useState(0);
    const[categorias,setCategorias] = useState([]);

    const getCategories = async() =>{

        const cats = [];
        const q = query(collection(db, "categorias"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
                cats.push({id:doc.id,title:doc.data().title})
        });
        setCategorias(cats);
    }

    useEffect(() => {
        getCategories()
        const updateCantCarrito = ((CartItems) => {
            let total = 0;
            context.CartItems.forEach(element => {
                total = total + element.cantidad
            });
            setCantidadCarrito(total);
        })

        let dropdowns = document.querySelectorAll(".dropdown-trigger");

        let options = {
          inDuration: 300,
          outDuration: 700,
          hover: true,
          coverTrigger: false,
          constrainWidth: false
        };
        
        M.Dropdown.init(dropdowns, options);

        var sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, options);

        var collapsibles = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsibles, options);

        updateCantCarrito(context.CartItems);

    },[context.CartItems]);

    return(
        <>
        <nav className="navbar-material">
            <div className="nav-wrapper">
                <Link id="logo-container" to="/" className="brand-logo left"><img src={logo_tienda} alt="logo"/></Link><Link id="logo-container" to="/" className="brand-logo text">CompuTar</Link>
                {
                // eslint-disable-next-line
                }
                <a href="/#" data-target="mobile" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link className="dropdown-trigger" to="/" data-target="dropdown">Productos</Link>
                    <ul id="dropdown" className="dropdown-content">
                    {categorias.map((categoria)=>{
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
                    {cantidadCarrito !== 0 ? <li><CartWidget cantidad={cantidadCarrito}/></li> : <li></li>}
                </ul>
                
            </div>
        </nav>
        <ul className="sidenav" id="mobile">
            <li className="sidenav-close">
            <h4 to="/" className="brand-logo text logo-side">CompuTar</h4>
            </li>
            <li className="sidenav-close"><Link to="/">Home</Link></li>
            <ul className="collapsible collapsible-accordion">
                <li>
                    {
                    // eslint-disable-next-line
                    }<a className="collapsible-header">Productos<i className="material-icons">arrow_drop_down</i></a>
                    <div className="collapsible-body">
                    <ul className="sidenav-close">
                        <li key={0}>
                            <Link to="/">Productos</Link>
                        </li>
                        {categorias.map((categoria)=>{
                            return(
                                <li key={categoria.id}>
                                    <Link to={`/category/${categoria.id}`} >{categoria.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                </li>
            </ul>
            {cantidadCarrito !== 0 ? <li className="sidenav-close"><CartWidget cantidad={cantidadCarrito}/></li> : <li></li>}
            <li className="sidenav-close">
                <Link to="/Contacto">Contacto</Link>
            </li>
        </ul>
        
        </>
    )
}

export default Navbar
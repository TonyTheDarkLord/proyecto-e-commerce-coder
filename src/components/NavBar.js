import logo_tienda from '../assets/logo_tienda.png'

const navbar = () =>{
    return(
        <nav className="navbar-material">
            <div className="nav-wrapper">
                <a id="logo-container" href="#" className="brand-logo left"><img src={logo_tienda} alt="logo"/></a><a id="logo-container" href="#" className="brand-logo text">CompuTar</a>
                
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar
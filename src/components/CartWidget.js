import {Link} from 'react-router-dom'

const cartWidget = (props) =>{
    return(
        <Link to="/">
            <i className="material-icons">shopping_cart <span className='badge badge-warning' id='lblCartCount'>{props.cantidad}</span></i>
        </Link>
    )
}

export default cartWidget
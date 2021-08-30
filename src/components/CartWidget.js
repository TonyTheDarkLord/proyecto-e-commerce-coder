import {Link} from 'react-router-dom'

const CartWidget = (props) =>{

    return(
        <Link to="/cart">
            <i className="material-icons">shopping_cart <span className='badge badge-warning' id='lblCartCount'>{props.cantidad}</span></i>
        </Link>
    )
}

export default CartWidget
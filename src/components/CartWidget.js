const cartWidget = (props) =>{
    return(
        <a href="/#">
            
            <i className="material-icons">shopping_cart <span className='badge badge-warning' id='lblCartCount'>{props.cantidad}</span></i>
        </a>
    )
}

export default cartWidget
import React, {useContext} from 'react'
import { ItemsContext } from '../Context';
import {Link} from 'react-router-dom'

const Cart = () => {

    const[CartItems,,onRemoveFromCart,clearCart] = useContext(ItemsContext);

    return (
        <div>
            {CartItems.length > 0 ? <>
                <h2>Productos en el carrito</h2>
                {CartItems.map((elemento) =>{
                    return(
                        <div key={elemento.item.id}>
                            <div className="col s12 m12 l12">
                                <div className="card horizontal">
                                <div className="card-image center-align cart valign-wrapper">
                                    <img alt="producto" src={elemento.item.img}></img>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                    <Link to={`/item/${elemento.item.id}`}><h4 className="line-clamp one-line">{elemento.item.title}</h4></Link>
                                    <h4>Cantidad: {elemento.cantidad}</h4>
                                    <h4>Precio unitario: {elemento.item.price}</h4>
                                    </div>
                                    <div className="card-action">
                                    <button className="btn red waves-effect waves-light valign-wrapper full-height" onClick={onRemoveFromCart} value={elemento.item.id}><span>Remover del carrito</span><i className="material-icons">clear</i></button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button className="btn red waves-effect waves-light valign-wrapper full-height" onClick={clearCart}>Limpiar Carrito<i className="material-icons">clear_all</i></button>
            </> : <><h2>Su Carrito esta vacio</h2><h4><Link to="/"> ← Volver al Inicio</Link></h4></>}
        </div>
    )
}

export default Cart
import React, {useContext} from 'react'
import { ItemsContext } from '../Context';
import {Link} from 'react-router-dom'

const Cart = () => {

    const[CartItems,,onRemoveFromCart,clearCart] = useContext(ItemsContext);

    return (
        <div>
            <h1>Proximamente Carrito</h1>
            {CartItems.length > 0 ? <>
                <h2>Productos en el carro</h2>
                {CartItems.map((elemento) =>{
                    return(
                        <div key={elemento.id}>
                            <h3>id : {elemento.id}, cantidad: {elemento.cantidad} <button className="btn red waves-effect waves-light valign-wrapper" onClick={onRemoveFromCart} value={elemento.id}><i className="material-icons">clear</i></button></h3>
                        </div>
                    )
                })}
                <button className="btn red waves-effect waves-light valign-wrapper" onClick={clearCart}>Limpiar Carrito<i className="material-icons">clear</i></button>
            </> : <><h2>Su Carrito esta vacio</h2><h4><Link to="/"> ← Volver al Inicio</Link></h4></>}
        </div>
    )
}

export default Cart

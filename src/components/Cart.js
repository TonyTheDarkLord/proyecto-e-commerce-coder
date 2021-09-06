import React, {useContext,useState,useEffect} from 'react'
import { ItemsContext } from '../Context';
import {Link} from 'react-router-dom'

const Cart = () => {

    const context = useContext(ItemsContext);
    const[total,setTotal] = useState(0);

    useEffect(() => {
        let sumatoria = 0
        context.CartItems.forEach(elemento => {
            sumatoria += elemento.item.price*elemento.cantidad
        })
        setTotal(sumatoria)
    },[context.CartItems])


    return (
        <div>
            {context.CartItems.length > 0 ? <>
                <h2>Productos en el carrito</h2>
                {context.CartItems.map((elemento) =>{
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
                                    <h4>Precio unitario: ${elemento.item.price}</h4>
                                    </div>
                                    <div className="card-action">
                                    <button className="btn red waves-effect waves-light valign-wrapper full-height" onClick={context.onRemoveFromCart} value={elemento.item.id}><span>Remover del carrito</span><i className="material-icons">clear</i></button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="card horizontal small">
                    <div className="row">
                        <div className="col s12 m6">
                            <button className="btn red waves-effect waves-light valign-wrapper boton-clean" onClick={context.clearCart}>Limpiar Carrito<i className="material-icons">clear_all</i></button>
                        </div>
                        <div className="col s12 m6">
                            <h4 className="right-align total">Total : ${total}</h4>
                        </div>
                    </div>
                </div>
                
            </> : <><h2>Su Carrito esta vacio</h2><h4><Link to="/"> ← Volver al Inicio</Link></h4></>}
        </div>
    )
}

export default Cart
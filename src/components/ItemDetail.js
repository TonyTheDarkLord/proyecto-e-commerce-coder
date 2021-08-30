import React, {useState, useContext, useEffect} from 'react'
import { Redirect } from "react-router-dom";
import ItemCount from './ItemCount'
import { ItemsContext } from '../Context';
import {Link} from 'react-router-dom'

const ItemDetail = ({item}) => {

    const[CartItems,setCartItems] = useContext(ItemsContext);
    const[,setCantCompra] = useState([]);
    const[updateRender,setUpdateRender] = useState(false);

    const onAdd = ((cantidad) => {

        let alreadyInCart = false;

        CartItems.forEach(elemento =>{
            if(elemento.id === item.id){
                elemento.cantidad = elemento.cantidad + cantidad;
                alreadyInCart = true;
            }
        })

        if(!alreadyInCart){
            setCartItems(CartAnterior => ([...CartAnterior, {'id':item.id,'cantidad':cantidad}]))
        }

        setCantCompra({'id':item.id,'cantidad':cantidad});
        setUpdateRender(true);

    })

    useEffect(() => {

        CartItems.forEach(elemento =>{
            if(elemento.id === item.id){
               setUpdateRender(true);
            }
        })
    
    })

    if (item.id !== 404){
        return (
            <>
                <div className="col s12 m4 l3"></div>
                <div className="col s12 m4 l6">
                    <div>
                        <h3 className="card-title">{item.title}</h3>
                        <div className="card-image center-align">
                        <img className="detalle-imagen" src={item.img} alt=""/>
                        </div>
                        <div className="card-content">
                        <h4>${item.price}</h4>
                        {updateRender === false ? <span>Cantidad : <ItemCount stock={item.stock} initial={1} action={onAdd}/></span> : <Link className="btn red waves-effect waves-light boton-finalizar-compra valign-wrapper" to="/cart">Terminar Compra<i className="material-icons">shopping_cart</i></Link>}
                        <p className="card-desc">{item.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4 l3"></div>
            </>
        );
    } else {
        return (
            <Redirect to='/404' />
        );
    }
    
}

export default ItemDetail

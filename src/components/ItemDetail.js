import React, {useState, useContext, useEffect} from 'react'
import { Redirect } from "react-router-dom";
import ItemCount from './ItemCount'
import { ItemsContext } from '../Context';
import {Link} from 'react-router-dom'

const ItemDetail = ({item}) => {

    const[CartItems,addToCart] = useContext(ItemsContext);
    const[cantCompra,setCantCompra] = useState(0);
    const[stockTotal,setStockTotal] = useState(0);

    const onAdd = ((cantidad) => {
        setCantCompra(cantidad);
        addToCart({'item':item,'cantidad':cantidad});
    })

    useEffect(() => {
        setStockTotal(item.stock)
        CartItems.forEach(elemento =>{
            if(elemento.item.id === item.id){
                setStockTotal(item.stock - elemento.cantidad)
                setCantCompra(elemento.cantidad);
            }
        })
    },[cantCompra, CartItems, item])

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
                        {cantCompra < item.stock ? <span>Cantidad : <ItemCount stock={stockTotal} initial={1} action={onAdd}/></span> : <Link className="btn red waves-effect waves-light boton-finalizar-compra valign-wrapper" to="/cart">Terminar Compra<i className="material-icons">shopping_cart</i></Link>}
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

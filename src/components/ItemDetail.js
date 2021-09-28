import React, {useState, useContext, useEffect} from 'react'
import { Redirect } from "react-router-dom";
import ItemCount from './ItemCount'
import { ItemsContext } from '../Context';
import {Link} from 'react-router-dom'
import NumberFormat from 'react-number-format'

const ItemDetail = ({item}) => {

    const context = useContext(ItemsContext);
    const[cantCompra,setCantCompra] = useState(0);
    const[stockTotal,setStockTotal] = useState(0);
    const[RenderCount,setRenderCount] = useState(true);

    const onAdd = ((cantidad) => {
        setCantCompra(cantidad);
        console.log(cantCompra)
        context.addToCart({'item':item,'cantidad':cantidad});
        setRenderCount(false)
    })

    useEffect(() => {
        setStockTotal(item.stock)
        context.CartItems.forEach(elemento =>{
            if(elemento.item.id === item.id){
                setStockTotal(item.stock - elemento.cantidad)
                setCantCompra(elemento.cantidad);
                if(elemento.cantidad < item.stock){
                    setRenderCount(true)
                }else {
                    setRenderCount(false)
                }
            }
        })
        // eslint-disable-next-line
    },[])

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
                        <h4><NumberFormat key={item.id} value={item.price} thousandSeparator={"."} decimalSeparator={","} displayType={"text"} prefix={'$'}/></h4>
                        {RenderCount ? <span>Cantidad : <ItemCount stock={stockTotal} initial={1} action={onAdd}/></span> : <Link className="btn red waves-effect waves-light boton-finalizar-compra valign-wrapper" to="/cart">Terminar Compra<i className="material-icons">shopping_cart</i></Link>}
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

import React, { Redirect } from "react-router-dom";
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

    if (item.id !== 404){
        return (
            <>
                <div className="col s12">
                    <div>
                        <h3 className="card-title">{item.title}</h3>
                        <div className="card-image center-align">
                        <img className="detalle-imagen" src={item.img} alt=""/>
                        </div>
                        <div className="card-content">
                        <h4>${item.price}</h4>
                        <span>Cantidad : <ItemCount stock={item.stock} initial={1}/></span>
                        <p className="card-desc">{item.description}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <Redirect to='/404' />
        );
    }
    
}

export default ItemDetail

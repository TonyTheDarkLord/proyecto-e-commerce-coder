import React from 'react'
import ItemCount from './ItemCount'

const Item = ({title,description,price,stock,img}) => {
    return (
        <>
        <div className="col s12 m6 l4">
            <div className="card hoverable">
                <div className="card-image valign-wrapper">
                <img src={img} alt=""/>
                </div>
                <div className="card-content">
                <span className="card-title">{title}</span>
                <p className="card-desc">{description}</p>
                <h4>${price}</h4>
                <span>Cantidad : <ItemCount stock={stock} initial="1"/></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item

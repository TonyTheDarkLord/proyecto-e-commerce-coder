import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({id,title,price,img,responsive}) => {
    return (
        <>
        <div className={responsive === 6 ? "col s12 m6 l6" : "col s12 m6 l3"}>
            <div className="card hoverable">
                <div className="card-image valign-wrapper">
                <img src={img} alt=""/>
                </div>
                <div className="card-content">
                <span className="card-title line-clamp">{title}</span>
                <h4>${price}</h4>
                    <Link className="btn red waves-effect waves-red" to={`/item/${id}`} >Ver Producto</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item

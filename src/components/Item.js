import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Item = ({id,title,price,img,responsive}) => {

    const [condRend,setCondRend] = useState(true)

    useEffect(() =>{
        if(responsive===undefined){
            setCondRend(false)
        } else {
            setCondRend(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    return (
        <>
        <div className={condRend ? "col s12 m"+responsive+" l"+responsive : "col s12 m6 l3"}>
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

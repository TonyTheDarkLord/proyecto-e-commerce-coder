import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import NumberFormat from 'react-number-format'

const Item = ({id,title,price,img,responsive}) => {

    const [condRend,setCondRend] = useState(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() =>{
        if(responsive===undefined){
            setCondRend(false)
        } else {
            setCondRend(true)
        }
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
                <h4><NumberFormat key={id} value={price} thousandSeparator={"."} decimalSeparator={","} displayType={"text"} prefix={'$'}/></h4>
                    <Link className="btn red waves-effect waves-red" to={`/item/${id}`} >Ver Producto</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item

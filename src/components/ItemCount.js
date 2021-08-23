import React, {useState} from 'react'

const ItemCount = ({stock, initial}) => {

    const[ItemCount, setItemCount] = useState(initial);

    const onAdd = () =>{
        setItemCount(ItemCount + 1);
    };

    const onDecrement = () =>{
        setItemCount(ItemCount - 1);
    };

    const checkMax = () => {
        if(ItemCount<stock){
            onAdd()
        }
    }

    const isZero = () => {
        if(ItemCount!==1){
            onDecrement()
        }
    }

    return (
        <>
            <button className="btn red waves-effect waves-red" onClick={isZero} >-</button>
            <button className="btn disabled" href="/#">{ItemCount}</button>
            <button className="btn red waves-effect waves-red" onClick={checkMax} >+</button>
            <div className="center-align">
                <button className="btn red waves-effect waves-light boton-agregar-carrito valign-wrapper">Agregar al carrito<i className="material-icons">add_shopping_cart</i></button>
            </div>
        </>
    )
}

export default ItemCount
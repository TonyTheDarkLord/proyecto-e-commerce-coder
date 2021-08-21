import React, {useState} from 'react'

const ItemCount = ({stock, initial}) => {

    const[ItemCount, setItemCount] = useState(Number(initial));

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
            <a className="btn red waves-effect waves-red" onClick={isZero}  href="/#r">-</a>
            <a className="btn disabled" href="/#">{ItemCount}</a>
            <a className="btn red waves-effect waves-red" onClick={checkMax} href="/#a">+</a>
            <div className="center-align">
                <a className="btn red waves-effect waves-light boton-agregar-carrito valign-wrapper" href="/#c">Agregar al carrito<i className="material-icons">add_shopping_cart</i></a>
            </div>
        </>
    )
}

export default ItemCount
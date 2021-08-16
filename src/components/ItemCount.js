import React from 'react'

const ItemCount = ({stock}) => {

    const[ItemCount, setItemCount] = React.useState(1);

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
        </>
    )
}

export default ItemCount
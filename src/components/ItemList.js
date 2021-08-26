import React from 'react'
import Item from './Item'

const ItemList = (props) => {

    let width = 3;

    if(Object.keys(props.productos).length < Number(4)){
        width = 6
    }

    return (
        <div className="row">
                {props.productos.map((producto) =>{
                    return(
                        <Item
                            key={producto.id}
                            id={producto.id}
                            title={producto.title}
                            img={producto.img}
                            description={producto.description}
                            price={producto.price}
                            stock={producto.stock}
                            responsive={width}
                        />
                    );
                })}
        </div>
    )

}

export default ItemList

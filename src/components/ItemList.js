import React from 'react'
import Item from './Item'

const ItemList = (props) => {
    return (
        <div className="row">
                {props.productos.map((producto) =>{
                    return(
                        <Item
                            key={producto.id}
                            title={producto.title}
                            img={producto.img}
                            description={producto.description}
                            price={producto.price}
                            stock={producto.stock}
                        />
                    );
                })}
        </div>
    )

}

export default ItemList

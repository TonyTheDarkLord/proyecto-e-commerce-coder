import React from 'react'
import ItemListContainer from './ItemListContainer'

//JSON DATA
import DataProds from '../assets/productos.json'

const ItemList = () => {
    return (
        <div className="row">
            {DataProds.map((producto) =>{
                return(
                    <ItemListContainer
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

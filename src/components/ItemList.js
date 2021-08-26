import React, {useLayoutEffect, useState} from 'react'
import Item from './Item'

const checkItems = (props) =>{
    if(Object.keys(props.productos).length < Number(4)){
        return 6
    }
}

const ItemList = (props) => {

    const[width,setWidth] = useState(3);

    useLayoutEffect(() => {setWidth(checkItems(props))},[props]);

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

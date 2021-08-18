import React, {useState, useEffect} from 'react'
import Item from './Item'

//JSON
import Prods from '../assets/productos.json'

const ItemList = () => {

    const [DataProds, setProductos] = useState([]);

    useEffect(() =>{
        new Promise((resolve, reject) => {
            setTimeout(() =>{
                setProductos(Prods)
                resolve(true);
            },2000)
        })
    })
    
    return (
        <div className="row">
                {DataProds.map((producto) =>{
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

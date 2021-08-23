import React, {useState,useEffect} from 'react'
import ItemList from './ItemList'

//JSON
import Prods from '../assets/productos.json'

const ItemListContainer = () =>{

    const [dataProds, setProductos] = useState([]);

    useEffect(() =>{
        new Promise((resolve, reject) => {
            setTimeout(() =>{
                setProductos(Prods.slice(0,4));
                resolve(true);
            },2000)
        })
    })

    return(
        <>
            <h3>Productos</h3>
            <ItemList productos={dataProds}/>
        </>
    )
}

export default ItemListContainer
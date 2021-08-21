import React, {useState,useEffect} from 'react'
import ItemList from './ItemList'

//JSON
import Prods from '../assets/productos.json'

const itemListContainer = () =>{

    const [dataProds, setProductos] = useState([]);

    useEffect(() =>{
        new Promise((resolve, reject) => {
            setTimeout(() =>{
                setProductos(Prods)
                resolve(true);
            },2000)
        })
    })

    return(
        <>
            <ItemList productos={dataProds}/>
        </>
    )
}

export default itemListContainer
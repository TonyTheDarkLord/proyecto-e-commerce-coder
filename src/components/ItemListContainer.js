import React, {useState,useEffect} from 'react'
import ContentLoader from 'react-content-loader'
import ItemList from './ItemList'
import {Link} from 'react-router-dom'

//JSON
import Prods from '../assets/productos.json'
import Categorias from '../assets/categorias.json'

const getCategoryName = (id) =>{

    let nombre;
    Categorias.forEach((categoria) => {
        if(categoria.id === Number(id)){
            nombre = categoria.title;
        }
        
    })
    return nombre;
}

const ItemListContainer = ({match}) =>{

    const [dataProds, setProductos] = useState([]);
    const [loading,setLoading] = useState(true);

    let id = match.params.id;
    let title = getCategoryName(id);

    useEffect(() =>{
        new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() =>{
                if(id === undefined){
                    setProductos(Prods.slice(0,4));
                    resolve(true);
                } else {
                    let ProdsXCat = [];
                    Prods.forEach( prod =>{
                        if(prod.category === Number(id)){
                            ProdsXCat.push(prod);
                        }
                    })
                    if(ProdsXCat.length !== 0){
                        resolve(true);
                    }
                    setProductos(ProdsXCat);
                    resolve(true);
                }
                setLoading(false);
            },2000)
        })
    },[id])

    return(
        <>
            <h3>Catalogo{title !== undefined ? ' > '+title : ''}</h3>
            {loading ? <div className="row"><div className="col s12 m6 l3 hoverable"><ContentLoader 
                speed={1}
                width="100%"
                height="100%"
                viewBox="0 0 700 1200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="2" y="4" rx="2" ry="2" width="100%" height="600" /> 
                <rect x="2" y="615" rx="0" ry="0" width="100%" height="200" /> 
                <rect x="2" y="850" rx="0" ry="0" width="50%" height="160" /> 
                <rect x="2" y="1050" rx="0" ry="0" width="100%" height="120" />
            </ContentLoader></div><div className="col s12 m6 l3 hoverable"><ContentLoader 
                speed={1}
                width="100%"
                height="100%"
                viewBox="0 0 700 1200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="2" y="4" rx="2" ry="2" width="100%" height="600" /> 
                <rect x="2" y="615" rx="0" ry="0" width="100%" height="200" /> 
                <rect x="2" y="850" rx="0" ry="0" width="50%" height="160" /> 
                <rect x="2" y="1050" rx="0" ry="0" width="100%" height="120" />
            </ContentLoader></div><div className="col s12 m6 l3 hoverable"><ContentLoader 
                speed={1}
                width="100%"
                height="100%"
                viewBox="0 0 700 1200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="2" y="4" rx="2" ry="2" width="100%" height="600" /> 
                <rect x="2" y="615" rx="0" ry="0" width="100%" height="200" /> 
                <rect x="2" y="850" rx="0" ry="0" width="50%" height="160" /> 
                <rect x="2" y="1050" rx="0" ry="0" width="100%" height="120" />
            </ContentLoader></div><div className="col s12 m6 l3 hoverable"><ContentLoader 
                speed={1}
                width="100%"
                height="100%"
                viewBox="0 0 700 1200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="2" y="4" rx="2" ry="2" width="100%" height="600" /> 
                <rect x="2" y="615" rx="0" ry="0" width="100%" height="200" /> 
                <rect x="2" y="850" rx="0" ry="0" width="50%" height="160" /> 
                <rect x="2" y="1050" rx="0" ry="0" width="100%" height="120" />
            </ContentLoader></div></div>: (dataProds.length === 0 ? <div className="row"><h2> No existen productos para esta categoria.</h2><h4><Link to="/"> ← Volver al Inicio</Link></h4></div> : <ItemList productos={dataProds}/>)}
        </>
    )
}

export default ItemListContainer
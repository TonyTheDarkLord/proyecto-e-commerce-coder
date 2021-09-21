import React, {useState,useEffect} from 'react'
import ItemList from './ItemList'
import {Link} from 'react-router-dom'
import Loader from './Loader'

//Firebase
import {db} from '../services/Firebase'
import { collection, query, where, getDocs, limit } from "firebase/firestore"

const getCategoryName = async(id) =>{

    let nombre;
    const q = query(collection(db, "categorias"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if(doc.id === id){
            nombre = doc.data().title
        }
    });
    return nombre;
}

const ItemListContainer = ({match}) =>{

    const [dataProds, setProductos] = useState([]);
    const [title, setTitle] = useState([]);
    const [loading,setLoading] = useState(true);

    let id = match.params.id;

    const getProductos = async(codigo) => {
        const prodsXCat = [];
        let q = query();
        if(codigo!==undefined){
            q = query(collection(db, "productos"), where("category", "==", Number(codigo)));
        } else {
            q = query(collection(db, "productos"), where("stock", ">", Number(0)), limit(4));
        }
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            prodsXCat.push({id : doc.id ,...doc.data()})
        });
        setProductos(prodsXCat);
    }

    useEffect(() =>{
        getCategoryName(id).then(result => {setTitle(' > ' + result);getProductos(id);setLoading(false);});
        getProductos(id);
    },[id,title])

    return(
        <>
            <h3>Catalogo{title !== " > undefined" ? title : ''}</h3>
            {loading ? <Loader/> : (dataProds.length === 0 ? ( loading ? <Loader/> : <div className="row"><h2> No existen productos para esta categoria.</h2><h4><Link to="/"> ← Volver al Inicio</Link></h4></div>) : <ItemList productos={dataProds}/>)}
        </>
    )
}

export default ItemListContainer
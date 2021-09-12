import React, {useState,useEffect} from 'react'
import ContentLoader from 'react-content-loader'
import ItemDetail from './ItemDetail'

//Firebase
import {db} from './Firebase'
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = ({match}) => {

    const [item,setItem] = useState({});
    const [loading,setLoading] = useState(true);

    let id = match.params.id;

    /* const itemExists = async(id) =>{

        return new Promise((resolve, reject) => {
            getItem(id).then(result => {
                setItem(result)
                if(result.id !== undefined){
                    resolve(result)
                } else {
                    reject(404);
                }
            })
        })
        
    } */
    
    const getItem = async(id) =>{
        const snap = await getDoc(doc(db, 'productos', id))
        if (snap.exists()) {
            return {id : id ,...snap.data()}
        } else {
            PromiseRejectionEvent(404)
        }
    
    }

    useEffect(() => {
        getItem(id).then((result) => {
            setItem(result);
        }).catch((error) => {
            let noItem =  {
                id:404
            }
            setItem(noItem);
        }).finally(() => setLoading(false))
        
    }, [id])
    

    return (
        <>
          {loading ? <div className="row"> <div className="col s12"><ContentLoader 
                speed={1}
                width="100%"
                height="60vh"
                viewBox="0 0 700 400"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="1" y="20" rx="2" ry="2" width="100%" height="2rem" /> 
                <rect x="0" y="80" rx="2" ry="2" width="100%" height="100" /> 
                <rect x="2" y="200" rx="2" ry="2" width="25%" height="65" /> 
                <rect x="2" y="280" rx="2" ry="2" width="100%" height="40" />
            </ContentLoader></div></div>: <div className="row item-detail-row"> <ItemDetail item={item}/> </div> }
        </>
    )
}

export default ItemDetailContainer

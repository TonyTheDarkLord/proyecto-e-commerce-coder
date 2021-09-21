import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {db} from '../services/Firebase'
import { getDoc, doc } from "firebase/firestore"
import ContentLoader from 'react-content-loader'

const Success = ({match}) => {

    let id = match.params.id
    const [cantidad,setCantidad] = useState(0)
    const [total,setTotal] = useState(0)
    const [nombre,setNombre] = useState("")

    const [existe,setExiste] = useState(true);
    const [loading,setLoading] = useState(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect((async() => {
        const snap = await getDoc(doc(db, 'orders', id))
        if (snap.exists()) {
            setCantidad(snap.data().items.map(item => item.cantidad).reduce((x,y) => x + y))
            setTotal(snap.data().total)
            setNombre(snap.data().buyer.name)
            setExiste(true)
            setLoading(false)
        } else {
            setExiste(false)
            setLoading(false)
        }
    }))

    return (
        <>{loading ? <div className="row"> <div className="col s12"><ContentLoader 
        speed={1}
        width="100%"
        height="60vh"
        viewBox="0 0 700 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="1" y="20" rx="2" ry="2" width="100%" height="4rem" /> 
        <rect x="0" y="110" rx="2" ry="2" width="100%" height="100" /> 
    </ContentLoader></div></div>:<>
        { existe ? <>
            <h3>Compra Realizada <i className="material-icons tick-grande">verified</i></h3>
            <div className="row" style={{margin: 0}}>
                <div className="col s12 m4 l2"></div>
                <div className="col s12 m4 l8">
                    <div className="row card wide padding-15">
                        <h4>Datos de la compra</h4>
                        <hr/>
                        <h4>ID: <Link to={"/success/"+id}>#{id}</Link></h4>
                        <h4>Total: $ {total}</h4>
                        <h4>Cantidad de productos: {cantidad}</h4>
                        <h4>A nombre de: {nombre}</h4>
                    </div>
                    <h4><Link to="/"> ← Volver al Inicio</Link></h4>
                </div>
                <div className="col s12 m4 l2"></div>
            </div>
            </> : <> <h3>Ups hubo un error! <i className="material-icons error-grande">new_releases</i></h3>
            <div className="row" style={{margin: 0}}>
                <div className="col s12 m4 l2"></div>
                <div className="col s12 m4 l8">
                <div className="row card wide padding-15">
                        <h4>La compra especificada no existe</h4>
                    </div>
                    <h4><Link to="/"> ← Volver al Inicio</Link></h4>
                </div>
                <div className="col s12 m4 l2"></div>
            </div> </>}</>
        }
        </>
    )
}

export default Success

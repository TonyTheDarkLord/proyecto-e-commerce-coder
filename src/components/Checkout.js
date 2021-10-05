import React, {useContext,useState} from 'react'
import { ItemsContext } from '../Context';
import {Link} from 'react-router-dom'
import { Redirect } from "react-router-dom";

import {db} from '../services/Firebase'
import { collection, addDoc, getDoc , doc, updateDoc } from "firebase/firestore"

const Checkout = () => {

    const context = useContext(ItemsContext);
    const [loading,setLoading] = useState(false);
    const [compra,setCompra] = useState(false);
    const [id,setId] = useState(undefined);

    const doCheckout = async(buyer) =>{
        let items = []
        setLoading(true)
        let today = new Date()
        context.CartItems.map((obj) => items = [...items, {'id': obj.item.id, 'title': obj.item.title, 'price': obj.item.price,'cantidad': obj.cantidad}]);
        const docRef = await addDoc(collection(db, "orders"), {'buyer' : buyer,'items' : items,'date' : today,'total' : context.total});
        ajustarStock(items)
        setId(docRef.id);
        setCompra(true)
        context.clearCart();
    }

    const ajustarStock = (items) =>{
        items.map(async(item) => {
            const docRef = doc(db, "productos", item.id)
            const snap = await getDoc(doc(db, 'productos', item.id))
            let nuevoStock = snap.data().stock - item.cantidad
            await updateDoc(docRef,{stock:nuevoStock});
        }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(event.target[3].value!==event.target[4].value){
            event.target[4].setCustomValidity('Las direcciones no coinciden.');
            event.target[4].classList.add('invalid')
        } else {
            event.target[4].classList.remove('invalid')
            let buyer = {'name':event.target[0].value + ", " + event.target[1].value, 'phone': event.target[2].value, 'email': event.target[3].value}
            doCheckout(buyer);
        }
        
        
    }

    const handleInputChange = (event) => {
        event.target.setCustomValidity('');
    }


    return (
        <>
        {context.CartItems.length > 0 ? <>{ !compra ? <>
        <h3>Finalizar Compra</h3>
            <div>
                <div className="row">
                <div className="col s12 m4 l2"></div>
                    <form className="col s12 m4 l8" onSubmit={handleSubmit}>
                    <div className="row card wide padding-15">
                        <div className="wide">
                            <h4>Datos de la compra</h4>
                            <hr/>
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="nombre" type="text" className="validate" required/>
                        <label htmlFor="nombre">Nombre</label>
                        </div>
                        <div className="input-field col s6">
                        <input id="apellido" type="text" className="validate" required/>
                        <label htmlFor="apellido">Apellido</label>
                        </div>
                        <div className="input-field col s12">
                        <i className="material-icons prefix">phone</i>
                        <input id="telephone" type="tel" className="validate" required/>
                        <label htmlFor="telephone">Telefono</label>
                        </div>
                        <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input id="mail" type="email" className="validate" /*onChange={handleInputChange}*/ required/>
                        <label htmlFor="mail">Email</label>
                        </div>
                        <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input id="mail_1" type="email" className="validate" onChange={handleInputChange} required/>
                        <label htmlFor="mail_1">Email</label>
                        </div>
                        <div className="center-align total">
                            {!loading ? <button className="btn red waves-effect waves-light valign-wrapper" type="submit">Realizar Pedido</button>:<div className="center-align"><div className="progress ancho"><div className="indeterminate"></div></div></div>}
                        </div>
                        <br/>
                    </div>
                    <h4><Link to="/cart">  ←  Volver al carrito</Link></h4>
                    </form>
                </div>
                <div className="col s12 m4 l2"></div>
            </div> </> : <><Redirect to={'/success/'+id} /></>}</> :
            <Redirect to='/404' />}
        </>
    )
}

export default Checkout

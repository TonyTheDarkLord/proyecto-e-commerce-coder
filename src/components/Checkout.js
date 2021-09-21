import React, {useContext,useState} from 'react'
import { ItemsContext } from '../Context';
import {Link} from 'react-router-dom'
import { Redirect } from "react-router-dom";

import {db} from '../services/Firebase'
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {

    const context = useContext(ItemsContext);
    const [loading,setLoading] = useState(false);
    const [items,setItems] = useState([]);
    const [buyer,setBuyer] = useState({});
    const [compra,setCompra] = useState(false);
    const [id,setId] = useState(undefined);

    const doCheckout = async() =>{
        setLoading(true)
        let today = new Date()
        context.CartItems.map((obj) => setItems([...items, {'id': obj.item.id, 'title': obj.item.title, 'price': obj.item.price,'cantidad': obj.cantidad}]));
        const docRef = await addDoc(collection(db, "orders"), {'buyer' : buyer,'items' : items,'date' : today,'total' : context.total});
        setId(docRef.id);
        setCompra(true)
        context.clearCart();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBuyer({'name':event.target[0].value + ", " + event.target[1].value, 'phone': event.target[2].value, 'email': event.target[3].value});
        doCheckout();
    }


    return (
        <>
        {context.CartItems.length > 0 ? <>{ !compra ? <>
        <h3>Finalizar Compra</h3>
        <h6><Link to="/cart">  ←  Volver al carrito</Link></h6>
            <div>
                <div className="row">
                <div className="col s12 m4 l2"></div>
                    <form className="col s12 m4 l8" onSubmit={handleSubmit}>
                    <div className="row card wide">
                        <br className="padding-10"></br>
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
                        <input id="icon_telephone" type="tel" className="validate" required/>
                        <label htmlFor="icon_telephone">Telefono</label>
                        </div>
                        <div className="input-field col s12">
                        <i className="material-icons prefix">email</i>
                        <input id="icon_telephone" type="email" className="validate" required/>
                        <label htmlFor="icon_telephone">Email</label>
                        </div>
                        <div className="center-align total">
                            {!loading ? <button className="btn red waves-effect waves-light valign-wrapper" type="submit">Realizar Pedido</button>:<div className="center-align"><div className="progress ancho"><div className="indeterminate"></div></div></div>}
                        </div>
                        <br/>
                    </div>
                    </form>
                </div>
                <div className="col s12 m4 l2"></div>
            </div> </> : <><Redirect to={'/success/'+id} /></>}</> :
            <Redirect to='/404' />}
        </>
    )
}

export default Checkout

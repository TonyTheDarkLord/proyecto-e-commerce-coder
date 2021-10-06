import React, { useState } from 'react';
import { send } from 'emailjs-com';

const {REACT_APP_USERID_SENDER,REACT_APP_TEMPLATEID_SENDER,REACT_APP_SERVICEID_SENDER} = process.env;

const Contacto = () => {

    const [response, setResponse] = useState(false)
    const [mensaje, setMensaje] = useState(false)
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
    const onSubmit = (e) => {
            setMensaje(false)
            setResponse(true)
            e.preventDefault();
            send(
            {REACT_APP_SERVICEID_SENDER}.REACT_APP_SERVICEID_SENDER,
            {REACT_APP_TEMPLATEID_SENDER}.REACT_APP_TEMPLATEID_SENDER,
            toSend,
            {REACT_APP_USERID_SENDER}.REACT_APP_USERID_SENDER
            )
            .then((response) => {
                setResponse(false)
                setMensaje(true)
                e.target[0].value = ""
                e.target[1].value = ""
                e.target[2].value = ""
                e.target[3].value = ""
            })
            .catch((err) => {
                setResponse(false)
            });
        };
    
        const handleChange = (e) => {
            setToSend({ ...toSend, [e.target.name]: e.target.value });
        };
    

    return (
        <>
            <h3>Contacto</h3>
            <div className="row margin0">
            <div className="col s12 m4 l3"></div>
            <div className="col s12 m4 l6">
            <div className="card wide padding-15">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                        <input /*placeholder="Juan Carlos"*/ name='to_name' type="text" className="validate" value={toSend.to_name} onChange={handleChange} required/>
                        <label for="first_name">Nombre</label>
                        </div>
                        <div className="input-field col s6">
                        <input id="last_name" /*placeholder="Betiro"*/ type="text" className="validate" required/>
                        <label for="last_name">Apellido</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="reply_to" /*placeholder="jcbetiro@ejemplo.com"*/ value={toSend.reply_to} onChange={handleChange} type="email" className="validate" required/>
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <textarea name="message" /*placeholder="Tu mensaje."*/ value={toSend.message} onChange={handleChange} className="materialize-textarea" required></textarea>
                        <label for="textarea1">Mensaje</label>
                        </div>
                    </div>
                    { response ? 
                    <>
                        <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                    </>
                    :
                    <>
                        <button type="submit" className="btn red waves-effect waves-light valign-wrapper wide">Enviar</button> 
                    </>
                    }
                    { mensaje ? 
                    <>
                        <div className="center">
                            <p>Mensaje enviado correctamente.(se envio una copia a su mail, revise spam)</p>
                        </div>
                    </>
                    :
                    <>
                    </>
                    }
                </form>
                </div>
            </div>
            <div className="col s12 m4 l3"></div>
            </div>
        </>
    )
}

export default Contacto

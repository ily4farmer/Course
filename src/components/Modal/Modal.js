import React, { useCallback, useContext, useState } from 'react';
import { Context } from '../Context/Context';
import Login from '../Login/Login';
import Register from '../Register/Register';
import "./Modal.sass"

const Modal = ({modal, hide}) => {
    const [link, setLink] = useState(true);
    const {loginHeandler} = useContext(Context);
    return ( 
        <div className={modal ? "modal hide" : "modal"} onClick={hide}>
            <div className="modal-block" onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <div style={link ? {fontWeight: "Bold"} : null} onClick={() => setLink(true)}>Логин</div>
                    <div style={!link ? {fontWeight: "Bold"} : null} onClick={() => setLink(false)}>Регистрация</div>
                    <button onClick={hide}>X</button>
                </div>
                <div className="modal__content">
                    {link ? <Login loginHeandler={loginHeandler}/> : <Register/>}
                </div>
            </div>
        </div>
    );
}
 
export default Modal;
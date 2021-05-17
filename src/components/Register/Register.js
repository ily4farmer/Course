import React, { Fragment, useContext } from 'react';
import { Context } from '../Context/Context';
import Form from '../Form/Form';

const Register = () => {
    const {emailHandler} = useContext(Context)
    return ( 
        <Fragment>
            <h2>Регистрация</h2>
            <Form submit="Зарегестироваться"/>
            
        </Fragment> 
    );
}
 
export default Register;
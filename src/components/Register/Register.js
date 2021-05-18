import React, { Fragment, useContext } from 'react';
import { Context } from '../Context/Context';
import Form from '../Form/Form';

const Register = ({methodForm}) => {
    const {registerHeandler} = useContext(Context);
    return ( 
        <Fragment>
            <h2>Регистрация</h2>
            <Form methodForm={registerHeandler} submit="Зарегестироваться"/>
        </Fragment> 
    );
}
 
export default Register;
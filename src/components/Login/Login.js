import React, { Fragment } from 'react';
import Form from '../Form/Form';

const Login = ({loginHeandler}) => {
    return ( 
        <Fragment>
            <h2>Логин</h2>
            <Form methodForm={loginHeandler} submit="Войти"/>
        </Fragment>
    );
}
 
export default Login;
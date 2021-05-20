import React, { Fragment } from 'react';
import "./Navigation.sass"
import { NavLink } from 'react-router-dom';


const Navigation = ({state, modalShow}) => {
    
    return ( 
        <header className="header">
            <div className="container wrapper">
                <div className="header__wrapper">
                    <div className="logo">
                        <NavLink to="/" className="logo__link">CourseApp</NavLink>
                    </div>
                    <nav className="nav">
                        <ul className="nav__list">
                        {
                            !state.auth ?
                                <li className="nav__item">
                                    <NavLink to="/" className="nav__link">Главная</NavLink>
                                </li>
                            :
                            <Fragment>
                                <li className="nav__item">
                                    <NavLink to="/" className="nav__link">Главная</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/calc" className="nav__link">Калькулятор</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/sample" className="nav__link">Образец</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="/info" className="nav__link">Информация</NavLink>
                                </li>
                            </Fragment>
                        }
                        </ul>
                    </nav>
                    <div className="register" onClick={modalShow}>
                        <NavLink to="#" className="register__link">Войти</NavLink>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Navigation;
import React from 'react';
import "./SideBar.sass"


const Sidebar = ({currency}) => {
    return ( 
        <div className="sidebar wrapper">
            <h3 className="sidebar__title">Все валюты</h3>
            <ul className="sidebar__list">
                {
                    Object.keys(currency).map((item) => {
                        return (
                            <li key={item} className="sidebar__item">
                                <span className="sidebar__item-wrapper">
                                    <img src={currency[item].flag} alt={item} className="sidebar__img"/>
                                    &ensp;
                                    <span>{`${item}`}</span>
                                    &ensp;
                                    <span>- {currency[item].name}</span>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
     );
}
 
export default Sidebar;
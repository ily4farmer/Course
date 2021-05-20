import React, { useContext } from 'react';
import { Context } from '../../components/Context/Context';
import "./Home.sass"

const Home = () => {
     const {state, baseCyrrencyHandler} = useContext(Context);
     const {currency, baseCyrrency, date} = state;
     return ( 
          <section className="home">
                    <div className="home__header">
                         <span>Дата: "{date}"</span>
                         &nbsp;&nbsp;
                         <span>
                              Базовая валюта:&nbsp;
                              <select value={state.baseCyrrency} onChange={baseCyrrencyHandler}>
                              {Object.keys(currency).map((item, index) => {
                                        return (
                                             <option key={index }value={item}>{item}</option>
                                        )})
                              }
                              </select>
                         </span>
                    </div>
                    <div className="home__content">
                         <ul className="home__list">
                              {
                                   Object.keys(currency).map((item, index) => {
                                        return (
                                        <li key={index} className="home__item">
                                             <img src={currency[baseCyrrency].flag} 
                                             alt={item} className="home__img"/>
                                             &nbsp;
                                             <span className="home__base">
                                             {`1 ${baseCyrrency} = `}
                                             &nbsp;
                                             <img src={currency[item].flag} alt="item" className="home__img"/>
                                             &nbsp;&nbsp;
                                             {`${item} - ${currency[item].course}`} 
                                             </span>
                                        </li>
                                        )
                                   })
                              }
                         </ul>
                         
                    </div>
          </section>
     );
}
 
export default Home;
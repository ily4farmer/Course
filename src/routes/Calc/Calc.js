import React, { useContext } from 'react';
import { Context } from '../../components/Context/Context';

const Calc = () => {
    const {state, selectTwo, selectOne, inputValue, getCalc} = useContext(Context),
          {currency} = state;

    function currencyMap() {
        return (
            Object.keys(currency).map((item, index) => {
                return (
                    <option key={index }value={item}>{item}</option>
            )})
            
        )
    }
    return ( <div>
        <div className="calc">
               <select value={state.selectOne} onChange={selectOne}>
                    {
                        currencyMap()
                    }
               </select>
               <input type="number" value={state.inputValue} onChange={inputValue}/>
               =
               <select value={state.selectTwo} onChange={selectTwo}>
                    {
                        currencyMap()
                    }
               </select>
               <button onClick={getCalc}>Получить</button>
          </div>
          <span>{ state.result === null ? null 
          : `${state.inputValue} ${state.selectOne} = ${state.result} ${state.selectTwo}`}
          </span>
        </div> );
}
 
export default Calc;
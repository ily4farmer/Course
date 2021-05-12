import React, { useContext } from 'react';
import { Context } from '../../components/Context/Context';

const Sample = () => {
    const {state, currencyMap, getDataSample, getSampleDate, getSampleBase, getSampleBaseTwo} = useContext(Context);
    return ( <div>
        <div className="sample">
               <select value={state.sample.base} onChange={getSampleBase}>
                   {currencyMap()}
               </select>
               <input type="date" value={state.sample.date} onChange={getSampleDate}/>
               <select value={state.sample.baseTwo} onChange={getSampleBaseTwo}>
                   {currencyMap()}
               </select>
               <button onClick={getDataSample}>Получить</button>
               <div className="sample__content">
                    {
                        Object.keys(state.sampleList).map((item, i) => {
                            return (
                                <div key={item} className="sample__item">
                                    <span>1 {state.sampleList[item].base} на момент:</span>
                                    &ensp;
                                    <span>{state.sampleList[item].date} =</span>
                                    &ensp;
                                    <span>{state.sampleList[item].course}</span>
                                    &ensp;
                                    <span>{state.sampleList[item].baseTwo}</span>
                                    &ensp;
                                    <br />
                                </div>
                            )
                        })
                    }
               </div>
        </div>
    </div> );
}
 
export default Sample;
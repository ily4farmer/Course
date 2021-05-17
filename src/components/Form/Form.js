import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { Context } from '../Context/Context';

const Form = ({submit}) => {
    const {emailHandler, state} = useContext(Context);
    const [valid, setValid] = useState(true);
    let error = ""
    if (!state.errorModal) {
        error = "Введите";
    }
    function validIpnut(i) {
        if (i.value = '') {
            setValid({valid: !valid})
        }
    }
    return ( 
        <form className="form">
            {   Object.keys(state.formControls).map((item) => {
                const i = state.formControls[item];
                return (
                    <label key={item} className="form__label">
                        <p>{i.name}</p>
                        <input name={i.type} onChange={e => emailHandler(e)} type={i.type} />
                        <span style={valid ? {display: 'none'} : {display: 'block'}}>{i.errorMessage}</span>
                    </label>
                )
               })}
                   
        </form>
     );
}
 
export default Form;
import React, { useContext } from 'react';
import { Fragment } from 'react';
import { Context } from '../Context/Context';

const Form = ({submit, methodForm}) => {
    const {formValidation, state} = useContext(Context);
    return ( 
        <Fragment>
        <form className="form">
            {   Object.keys(state.formControls).map((item) => {
                const i = state.formControls[item];
                return (
                    <label key={item} className="form__label">
                        <p>{i.name}</p>
                        <input name={i.type} onChange={e => formValidation(e)} type={i.type} />
                        <span style={i.valid ? {display: 'none'} : {display: 'block', color: "red"}}>{i.errorMessage}</span>
                    </label>
                )
               })}
                   <input type="submit" onClick={e => methodForm(e)} value={submit}/>
        </form>
        
        </Fragment>
     );
}
 
export default Form;
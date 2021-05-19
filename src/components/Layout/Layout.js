import React, { Fragment, useContext } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../routes/Home/Home';
import Calc from '../../routes/Calc/Calc';
import Sample from '../../routes/Sample/Sample';
import Info from '../../routes/Info/Info';
import { Context } from '../Context/Context';

const Layout = () => {
    const {state} = useContext(Context);
    return ( 
    
        <Fragment>
            {state.auth ?
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/calc" component={Calc}/>
                    <Route path="/sample" component={Sample}/>
                    <Route path="/info" component={Info}/> 
                </Switch>
            :
                <Route path="/" component={Home}/>
            } 
        </Fragment>
    );
}
 
export default Layout;
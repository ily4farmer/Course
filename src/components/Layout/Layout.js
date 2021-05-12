import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import Home from '../../routes/Home/Home';
import Calc from '../../routes/Calc/Calc';
import Sample from '../../routes/Sample/Sample';
import Info from '../../routes/Info/Info';

const Layout = () => {
    return ( 
        <Fragment>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/calc" component={Calc}/>
            <Route path="/sample" component={Sample}/>
            <Route path="/info" component={Info}/>   
        </Fragment>
    );
}
 
export default Layout;
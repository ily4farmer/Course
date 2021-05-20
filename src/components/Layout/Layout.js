import React, { Fragment, useContext } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../routes/Home/Home';
import Calc from '../../routes/Calc/Calc';
import Sample from '../../routes/Sample/Sample';
import Info from '../../routes/Info/Info';
import { Context } from '../Context/Context';
import Sidebar from '../SideBar/SideBar';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
    const {state, modalShow} = useContext(Context);
    return ( 
        <Fragment>
            <Navigation state={state} modalShow={modalShow}/>
            <div className="container">
                <div className="content">
                    <div className="content__wrapper wrapper">
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
                    </div>
                    <Sidebar currency={state.currency}/> 
                </div>
            </div>
        </Fragment>
    );
}
 
export default Layout;
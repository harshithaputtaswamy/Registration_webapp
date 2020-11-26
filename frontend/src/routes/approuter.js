import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Reg_Form from '../components/Reg_Form';
import Home from '../components/Home';
import Tq from '../components/tq';
import Notfound from '../components/Notfound';

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/Reg_Form" component={Reg_Form} />
                <Route path="/Tq" component={Tq}  />
                <Route component={Notfound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
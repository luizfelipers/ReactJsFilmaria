import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from './pages/Home';
import Erro from './pages/erro';
import Filme from './pages/filme';



const Routes = () => {
    return(
        <BrowserRouter>
            
            <Switch>
                <Route exact path="/" component={Home}></Route>

                <Route exact path='/filme/:id' component={Filme}></Route>
                <Route path='*' component={Erro}></Route>


            </Switch>
        </BrowserRouter>
    );


}
export default Routes;
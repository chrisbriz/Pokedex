import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home } from '../views/home-view/homeView';
import { Pokedex } from "../views/podedex-view/pokedexView";

import RoutingPath from "./RoutingPath";

export const Routes = ({children}) => {
    return(
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.home} component={Home}/>
                <Route exact path={RoutingPath.pokedex} component={Pokedex}/>
                <Redirect to='/'/>
            </Switch>
        </BrowserRouter>
    )
}
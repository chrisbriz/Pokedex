import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PokemonView } from '../views/pokemon-view/pokemon-view';
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
                <Route exact path={RoutingPath.pokemon} component={PokemonView}/>
                <Redirect to='/'/>
            </Switch>
        </BrowserRouter>
    )
}
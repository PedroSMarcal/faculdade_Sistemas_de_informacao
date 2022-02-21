import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Repository } from "../pages/Repository";
//importar as classes do react-router-dom

export const Routes: React.FC = () => {
    return (
        // vai trocar entre as páginas 
        // Dashboard é o componente raiz e a pagina padrão
        <Switch>
            <Route component={Dashboard} path="/" exact/>
            <Route component={Repository} path="/repositories"/>
        </Switch>
    )
}
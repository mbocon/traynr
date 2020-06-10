import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router';

const routes = [
    {
        path: '/',
        component: App,
        name: 'Main-Page'
    }
]

const root = document.getElementById("root");
const hist = createBrowserHistory();

ReactDOM.render(<Router history={hist}>
        <Switch>
            {
                routes.map((route)=>{
                    return(
                        <Route path={route.path} component={route.component} key={route.name}></Route>
                    )
                })
            }
        </Switch>
    </Router>, root);

